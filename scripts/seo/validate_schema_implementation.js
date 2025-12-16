#!/usr/bin/env node

/**
 * Schema Validation Script
 * Validates all schema implementations for CRPO compliance and technical correctness
 */

const fs = require('fs');
const path = require('path');
const { CRPOComplianceChecker } = require('./ai_schema_generator.js');

class SchemaValidator {
    constructor() {
        this.results = {
            filesChecked: 0,
            schemasFound: 0,
            complianceIssues: [],
            technicalIssues: [],
            recommendations: []
        };
    }

    // Extract and validate schema from HTML file
    validateFile(filePath) {
        console.log(`\n🔍 Validating: ${path.basename(filePath)}`);
        
        try {
            const htmlContent = fs.readFileSync(filePath, 'utf8');
            const schemas = this.extractSchemas(htmlContent);
            
            this.results.filesChecked++;
            this.results.schemasFound += schemas.length;
            
            console.log(`   Found ${schemas.length} schema(s)`);
            
            schemas.forEach((schema, index) => {
                this.validateSchema(schema, filePath, index);
            });
            
        } catch (error) {
            console.error(`   ❌ Error reading file: ${error.message}`);
            this.results.technicalIssues.push({
                file: filePath,
                issue: `File read error: ${error.message}`
            });
        }
    }

    // Extract schema from HTML content
    extractSchemas(htmlContent) {
        const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
        const schemas = [];
        let match;

        while ((match = schemaRegex.exec(htmlContent)) !== null) {
            try {
                const schema = JSON.parse(match[1]);
                schemas.push(schema);
            } catch (error) {
                this.results.technicalIssues.push({
                    issue: `Invalid JSON in schema: ${error.message}`,
                    content: match[1].substring(0, 100) + '...'
                });
            }
        }

        return schemas;
    }

    // Validate individual schema
    validateSchema(schema, filePath, index) {
        const schemaType = schema['@type'];
        console.log(`   📋 Schema ${index + 1}: ${schemaType}`);

        // Technical validation
        this.validateTechnical(schema, filePath, index);
        
        // CRPO compliance validation
        this.validateCRPOCompliance(schema, filePath, index);
        
        // Schema-specific validation
        this.validateSchemaSpecific(schema, filePath, index);
    }

    // Technical schema validation
    validateTechnical(schema, filePath, index) {
        const issues = [];

        // Check required fields
        if (!schema['@context']) {
            issues.push('Missing @context');
        }
        
        if (!schema['@type']) {
            issues.push('Missing @type');
        }

        // Check context URL
        if (schema['@context'] && schema['@context'] !== 'https://schema.org') {
            issues.push('Incorrect @context URL');
        }

        // Check for empty required fields
        const requiredFields = this.getRequiredFields(schema['@type']);
        requiredFields.forEach(field => {
            if (!schema[field] || schema[field] === '') {
                issues.push(`Missing required field: ${field}`);
            }
        });

        if (issues.length > 0) {
            this.results.technicalIssues.push({
                file: filePath,
                schema: index + 1,
                type: schema['@type'],
                issues: issues
            });
        }
    }

    // CRPO compliance validation
    validateCRPOCompliance(schema, filePath, index) {
        const schemaText = JSON.stringify(schema);
        const compliance = CRPOComplianceChecker.checkCompliance(schemaText);
        
        if (!compliance.compliant) {
            this.results.complianceIssues.push({
                file: filePath,
                schema: index + 1,
                type: schema['@type'],
                issues: compliance.issues
            });
        }

        // Additional therapy-specific checks
        this.validateTherapyCompliance(schema, filePath, index);
    }

    // Therapy-specific compliance checks
    validateTherapyCompliance(schema, filePath, index) {
        const issues = [];
        const schemaText = JSON.stringify(schema).toLowerCase();

        // Check for proper credential identification
        if (schema['@type'] === 'Person' || schema['@type'] === 'MedicalBusiness') {
            if (!schemaText.includes('crpo') && !schemaText.includes('registered psychotherapist')) {
                issues.push('Missing CRPO credential identification');
            }
        }

        // Check for testimonials (prohibited)
        if (schemaText.includes('testimonial') || schemaText.includes('review from client')) {
            issues.push('Contains prohibited client testimonials');
        }

        // Check for outcome guarantees
        const guaranteeWords = ['guarantee', 'promise', 'ensure', 'will cure', 'will eliminate'];
        guaranteeWords.forEach(word => {
            if (schemaText.includes(word)) {
                issues.push(`Contains prohibited guarantee language: "${word}"`);
            }
        });

        if (issues.length > 0) {
            this.results.complianceIssues.push({
                file: filePath,
                schema: index + 1,
                type: schema['@type'],
                issues: issues
            });
        }
    }

    // Schema-specific validation
    validateSchemaSpecific(schema, filePath, index) {
        const type = schema['@type'];
        
        switch (type) {
            case 'LocalBusiness':
            case 'MedicalBusiness':
                this.validateBusinessSchema(schema, filePath, index);
                break;
            case 'Person':
                this.validatePersonSchema(schema, filePath, index);
                break;
            case 'FAQPage':
                this.validateFAQSchema(schema, filePath, index);
                break;
        }
    }

    // Validate business schema
    validateBusinessSchema(schema, filePath, index) {
        const recommendations = [];

        if (!schema.address) {
            recommendations.push('Consider adding address for better local SEO');
        }

        if (!schema.telephone) {
            recommendations.push('Consider adding telephone for better contact info');
        }

        if (!schema.areaServed) {
            recommendations.push('Consider adding areaServed for geographic targeting');
        }

        if (recommendations.length > 0) {
            this.results.recommendations.push({
                file: filePath,
                schema: index + 1,
                type: schema['@type'],
                recommendations: recommendations
            });
        }
    }

    // Validate person schema
    validatePersonSchema(schema, filePath, index) {
        const recommendations = [];

        if (!schema.hasCredential && !schema.memberOf) {
            recommendations.push('Consider adding credentials or professional memberships');
        }

        if (!schema.knowsAbout) {
            recommendations.push('Consider adding areas of expertise');
        }

        if (recommendations.length > 0) {
            this.results.recommendations.push({
                file: filePath,
                schema: index + 1,
                type: schema['@type'],
                recommendations: recommendations
            });
        }
    }

    // Validate FAQ schema
    validateFAQSchema(schema, filePath, index) {
        const recommendations = [];

        if (!schema.mainEntity || schema.mainEntity.length < 3) {
            recommendations.push('Consider adding more FAQ items for better coverage');
        }

        if (schema.mainEntity) {
            schema.mainEntity.forEach((faq, faqIndex) => {
                if (!faq.acceptedAnswer || !faq.acceptedAnswer.text) {
                    recommendations.push(`FAQ ${faqIndex + 1} missing answer text`);
                }
            });
        }

        if (recommendations.length > 0) {
            this.results.recommendations.push({
                file: filePath,
                schema: index + 1,
                type: schema['@type'],
                recommendations: recommendations
            });
        }
    }

    // Get required fields for schema type
    getRequiredFields(schemaType) {
        const requiredFields = {
            'LocalBusiness': ['name'],
            'MedicalBusiness': ['name'],
            'Person': ['name'],
            'FAQPage': ['mainEntity'],
            'Article': ['headline', 'author'],
            'MedicalWebPage': ['name']
        };

        return requiredFields[schemaType] || [];
    }

    // Generate validation report
    generateReport() {
        console.log('\n📊 SCHEMA VALIDATION REPORT');
        console.log('============================');
        console.log(`Files checked: ${this.results.filesChecked}`);
        console.log(`Total schemas found: ${this.results.schemasFound}`);
        console.log(`Technical issues: ${this.results.technicalIssues.length}`);
        console.log(`CRPO compliance issues: ${this.results.complianceIssues.length}`);
        console.log(`Recommendations: ${this.results.recommendations.length}`);

        // Technical issues
        if (this.results.technicalIssues.length > 0) {
            console.log('\n❌ TECHNICAL ISSUES:');
            this.results.technicalIssues.forEach(issue => {
                console.log(`   ${issue.file} (Schema ${issue.schema}): ${issue.issues.join(', ')}`);
            });
        }

        // CRPO compliance issues
        if (this.results.complianceIssues.length > 0) {
            console.log('\n⚠️  CRPO COMPLIANCE ISSUES:');
            this.results.complianceIssues.forEach(issue => {
                console.log(`   ${issue.file} (Schema ${issue.schema}): ${issue.issues.join(', ')}`);
            });
        }

        // Recommendations
        if (this.results.recommendations.length > 0) {
            console.log('\n💡 RECOMMENDATIONS:');
            this.results.recommendations.forEach(rec => {
                console.log(`   ${rec.file} (${rec.type}): ${rec.recommendations.join(', ')}`);
            });
        }

        // Overall assessment
        console.log('\n🎯 OVERALL ASSESSMENT:');
        if (this.results.technicalIssues.length === 0 && this.results.complianceIssues.length === 0) {
            console.log('   ✅ All schemas are technically valid and CRPO compliant!');
            console.log('   🚀 Ready for Google Rich Results and improved rankings');
        } else if (this.results.complianceIssues.length === 0) {
            console.log('   ✅ CRPO compliant - safe for professional use');
            console.log('   ⚠️  Some technical improvements recommended');
        } else {
            console.log('   ❌ CRPO compliance issues must be fixed before deployment');
        }

        return this.results;
    }

    // Main validation function
    validate() {
        console.log('🔍 Starting Schema Validation');
        console.log('Checking CRPO compliance and technical correctness\n');

        // Files to validate
        const filesToCheck = [
            '/Users/jessecynamon/NextStepTherapy/index.html',
            '/Users/jessecynamon/NextStepTherapy/public/faq-therapy-ontario.html',
            '/Users/jessecynamon/NextStepTherapy/anxiety-therapy-toronto.html',
            '/Users/jessecynamon/NextStepTherapy/depression-therapy-ottawa.html'
        ];

        // Validate each file
        filesToCheck.forEach(file => {
            if (fs.existsSync(file)) {
                this.validateFile(file);
            } else {
                console.log(`⚠️  File not found: ${file}`);
            }
        });

        // Generate and return report
        return this.generateReport();
    }
}

// Run validation if called directly
if (require.main === module) {
    const validator = new SchemaValidator();
    validator.validate();
}

module.exports = SchemaValidator;
