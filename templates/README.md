# NextStep Therapy Templates

## Folder Structure

```
templates/
├── html/           # HTML page templates
├── prompts/        # AI prompts for content creation
└── images/         # AI image generation prompts
```

## HTML Templates

### html/
- `landing-page-template.html` - Full landing page with schema markup
- `D4_page_template.html` - Generic page template with placeholders

## AI Prompts

### prompts/
Prompts for generating content with AI:
- `comprehensive_research_prompt_for_opus.md` - Research prompts for Claude
- `claude_build_counselling_page_prompt.md` - Page building instructions
- `followup_validation_prompt_for_opus.md` - Validation prompts
- `developer_fixes_prompt.md` - Developer task prompts
- `perplexity_*.md` - Perplexity AI research prompts (legacy)

### images/
AI image generation prompts:
- `ai_image_prompts.md` - Basic image prompts
- `ai_image_prompts_detailed.md` - Detailed specifications
- `site_matched_image_prompts.md` - Site-specific image prompts

## Usage

### Creating a New Page
1. Copy `html/landing-page-template.html`
2. Update placeholders (TITLE, KEYWORD, CITY, etc.)
3. Add schema markup
4. Follow E-E-A-T guidelines from CLAUDE.md

### Using AI Prompts
Reference the appropriate prompt file when using Claude or Perplexity for content generation.
