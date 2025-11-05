const cheerio = require('cheerio');
const fs = require('fs');

class TextLocator {
    constructor(filePath, wordsToFind) {
        this.filePath = filePath;
        this.wordsToFind = wordsToFind;
        this.htmlContent = fs.readFileSync(filePath, 'utf-8');
        this.$ = cheerio.load(this.htmlContent);
    }

    run() {
        console.log(`🚀 Searching for hidden text in ${this.filePath}...`);
        let found = false;

        this.wordsToFind.forEach(word => {
            // Search the entire body, including non-visible elements
            this.$('body').find('*').each((i, elem) => {
                const element = this.$(elem);
                // Check the element's own text, excluding children's text
                const ownText = element.clone().children().remove().end().text();
                
                if (ownText && ownText.toLowerCase().includes(word)) {
                    console.log(`\n--- FOUND '${word}' ---`);
                    console.log(`Location: In the element's direct text.`);
                    this.printContext(element);
                    found = true;
                }

                // Check attributes that might contain hidden text
                const attributesToCheck = ['title', 'aria-label', 'alt'];
                attributesToCheck.forEach(attr => {
                    const attrValue = element.attr(attr);
                    if (attrValue && attrValue.toLowerCase().includes(word)) {
                        console.log(`\n--- FOUND '${word}' ---`);
                        console.log(`Location: In the '${attr}' attribute.`);
                        this.printContext(element);
                        found = true;
                    }
                });
            });
        });

        if (!found) {
            console.log('\n✅ No instances of the specified words were found in text nodes or key attributes.');
        }
    }

    printContext(element) {
        // Get the outer HTML of the element itself
        const elementHtml = this.$.html(element.clone().empty());
        console.log(`Element: ${elementHtml}`);
        
        // Get the parent's HTML for context
        const parentHtml = this.$.html(element.parent().clone().empty());
        console.log(`Parent: ${parentHtml}`);

        // Note: Line numbers are complex to get with Cheerio, but the tag structure is usually enough.
        console.log(`-------------------\n`);
    }
}

const words = ['cure', 'top', 'eliminate', 'best', 'leading', 'proves'];
const locator = new TextLocator('public/therapist-toronto-depression.html', words);
locator.run();
