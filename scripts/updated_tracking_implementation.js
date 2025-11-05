// UPDATED TRACKING CODE FOR ALL PAGES
// Use this version instead of the previous form-submission tracking

const updatedTrackingCode = `
    <!-- Google Analytics 4 + Conversion Tracking -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-J8H4YBGSHR"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-J8H4YBGSHR', {
            'allow_enhanced_conversions': true,
            'send_page_view': true
        });

        // Track phone clicks (keep this on all pages)
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href^="tel:"]').forEach(link => {
                link.addEventListener('click', function() {
                    gtag('event', 'phone_call', {
                        'event_category': 'conversion',
                        'value': 175,
                        'currency': 'CAD'
                    });
                });
            });
        });
    </script>`;

console.log('📊 UPDATED TRACKING STRATEGY:');
console.log('');
console.log('✅ BETTER APPROACH WITH THANK-YOU PAGE:');
console.log('   • Form submissions → Thank-you page load');
console.log('   • Thank-you page fires generate_lead event');
console.log('   • More accurate conversion tracking');
console.log('   • Perfect attribution maintained');
console.log('');
console.log('🎯 TRACKING FLOW:');
console.log('   1. User visits SEO page (page_view tracked)');
console.log('   2. User clicks CTA → Homepage (navigation tracked)');
console.log('   3. User submits form → Thank-you page (form redirect)');
console.log('   4. Thank-you page loads → generate_lead event fires');
console.log('   5. Attribution: SEO page → $175 revenue ✅');
console.log('');
console.log('📋 NEXT STEPS:');
console.log('   1. Update FormSubmit.co to redirect to /thank-you.html');
console.log('   2. Remove form submission tracking from other pages');
console.log('   3. Keep phone click tracking on all pages');
console.log('   4. Test the new flow');
console.log('');
console.log('🔧 IMPLEMENTATION:');
console.log('   • Thank-you page: ✅ Created with conversion tracking');
console.log('   • Other pages: Remove form submit listeners');
console.log('   • Phone tracking: Keep on all pages');
console.log('   • Attribution: Will work perfectly');
