#!/usr/bin/env node

/**
 * Custom Manus AI MCP Server
 * Integrates Manus AI API with Model Context Protocol
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

const MANUS_API_KEY = process.env.MANUS_API_KEY;
const MANUS_API_BASE = 'https://api.manus.ai/v1';

class ManusServer {
  constructor() {
    this.server = new Server(
      {
        name: 'manus-mcp-server',
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    
    // Error handling
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'manus_create_task',
          description: 'Create a new AI analysis task with Manus AI',
          inputSchema: {
            type: 'object',
            properties: {
              prompt: {
                type: 'string',
                description: 'The analysis prompt or question for Manus AI',
              },
              mode: {
                type: 'string',
                enum: ['fast', 'quality'],
                description: 'Processing mode: fast for quick analysis, quality for detailed research',
                default: 'quality'
              },
              attachments: {
                type: 'array',
                description: 'Optional file attachments',
                items: {
                  type: 'object',
                  properties: {
                    filename: { type: 'string' },
                    url: { type: 'string' },
                    mime_type: { type: 'string' },
                    size_bytes: { type: 'number' }
                  }
                }
              }
            },
            required: ['prompt'],
          },
        },
        {
          name: 'manus_therapy_market_analysis',
          description: 'Specialized therapy market analysis using Manus AI',
          inputSchema: {
            type: 'object',
            properties: {
              location: {
                type: 'string',
                description: 'Geographic location to analyze (e.g., Toronto, Ontario)',
                default: 'Ontario'
              },
              therapy_type: {
                type: 'string',
                description: 'Type of therapy to analyze (e.g., CBT, DBT, EMDR)',
              },
              analysis_type: {
                type: 'string',
                enum: ['competition', 'pricing', 'keywords', 'opportunities'],
                description: 'Type of analysis to perform'
              }
            },
            required: ['therapy_type', 'analysis_type'],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'manus_create_task':
            return await this.createTask(args);
          
          case 'manus_therapy_market_analysis':
            return await this.therapyMarketAnalysis(args);
          
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
        };
      }
    });
  }

  async createTask(args) {
    const { prompt, mode = 'quality', attachments = [] } = args;

    const response = await fetch(`${MANUS_API_BASE}/tasks`, {
      method: 'POST',
      headers: {
        'API_KEY': MANUS_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        prompt,
        mode,
        attachments
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Manus API Error: ${error.message || response.statusText}`);
    }

    const result = await response.json();

    return {
      content: [
        {
          type: 'text',
          text: `✅ Manus AI Task Created Successfully!

**Task ID:** ${result.taskId}
**Title:** ${result.taskTitle}
**URL:** ${result.taskUrl}

**Prompt:** ${prompt}
**Mode:** ${mode}

You can view the results at: ${result.taskUrl}`,
        },
      ],
    };
  }

  async therapyMarketAnalysis(args) {
    const { location = 'Ontario', therapy_type, analysis_type } = args;

    const prompts = {
      competition: `Analyze the competitive landscape for ${therapy_type} therapy in ${location}. Identify:
1. Top competitors and their market positioning
2. Pricing strategies and service offerings
3. Digital marketing approaches and SEO strategies
4. Market gaps and opportunities for a digital landlord model
5. Recommendations for competitive advantage`,

      pricing: `Research pricing strategies for ${therapy_type} therapy services in ${location}. Analyze:
1. Average session costs and package pricing
2. Insurance coverage and payment options
3. Premium vs budget positioning strategies
4. Lead generation service pricing (what therapists pay for marketing)
5. Optimal pricing for page rental model`,

      keywords: `Conduct keyword research for ${therapy_type} therapy in ${location}. Focus on:
1. High-volume, low-competition keywords
2. Local SEO opportunities and geographic modifiers
3. Long-tail keyword opportunities
4. Search intent analysis (informational vs commercial)
5. Content gaps where no one is ranking well`,

      opportunities: `Identify market opportunities for ${therapy_type} therapy lead generation in ${location}. Analyze:
1. Underserved demographics and niches
2. Geographic areas with high demand, low supply
3. Digital marketing gaps in the current market
4. Partnership opportunities with clinics and practices
5. Scalability potential and revenue projections`
    };

    const prompt = prompts[analysis_type];
    if (!prompt) {
      throw new Error(`Invalid analysis_type: ${analysis_type}`);
    }

    return await this.createTask({ prompt, mode: 'quality' });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Manus MCP server running on stdio');
  }
}

const server = new ManusServer();
server.run().catch(console.error);
