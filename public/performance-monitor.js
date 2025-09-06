// Core Web Vitals Performance Monitor
// Track LCP, INP, CLS for optimization

(function() {
    'use strict';
    
    // Only run if browser supports the APIs
    if (!('PerformanceObserver' in window)) return;
    
    // Store vitals data
    const vitals = {
        lcp: null,
        inp: null,
        cls: null,
        fcp: null
    };
    
    // Largest Contentful Paint (LCP) - Target: <2.0s for healthcare
    function observeLCP() {
        try {
            const observer = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                
                vitals.lcp = Math.round(lastEntry.startTime);
                
                // Log to GA4 if available
                if (typeof gtag === 'function') {
                    gtag('event', 'web_vitals', {
                        event_category: 'performance',
                        metric_name: 'LCP',
                        metric_value: vitals.lcp,
                        metric_delta: vitals.lcp,
                        custom_parameter_1: vitals.lcp < 2000 ? 'good' : vitals.lcp < 4000 ? 'needs_improvement' : 'poor'
                    });
                }
                
                console.log('LCP:', vitals.lcp + 'ms', vitals.lcp < 2000 ? '✅ GOOD' : vitals.lcp < 4000 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
            console.log('LCP observation not supported');
        }
    }
    
    // Interaction to Next Paint (INP) - Target: <150ms for healthcare
    function observeINP() {
        try {
            const observer = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (entry.interactionId) {
                        const duration = entry.processingEnd - entry.startTime;
                        
                        if (!vitals.inp || duration > vitals.inp) {
                            vitals.inp = Math.round(duration);
                            
                            if (typeof gtag === 'function') {
                                gtag('event', 'web_vitals', {
                                    event_category: 'performance',
                                    metric_name: 'INP',
                                    metric_value: vitals.inp,
                                    custom_parameter_1: vitals.inp < 150 ? 'good' : vitals.inp < 300 ? 'needs_improvement' : 'poor'
                                });
                            }
                            
                            console.log('INP:', vitals.inp + 'ms', vitals.inp < 150 ? '✅ GOOD' : vitals.inp < 300 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
                        }
                    }
                }
            });
            
            observer.observe({ entryTypes: ['event'] });
        } catch (e) {
            console.log('INP observation not supported');
        }
    }
    
    // Cumulative Layout Shift (CLS) - Target: <0.05 for medical forms
    function observeCLS() {
        try {
            let clsValue = 0;
            
            const observer = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                
                vitals.cls = Math.round(clsValue * 1000) / 1000;
                
                if (typeof gtag === 'function') {
                    gtag('event', 'web_vitals', {
                        event_category: 'performance',
                        metric_name: 'CLS',
                        metric_value: vitals.cls,
                        custom_parameter_1: vitals.cls < 0.05 ? 'good' : vitals.cls < 0.25 ? 'needs_improvement' : 'poor'
                    });
                }
                
                console.log('CLS:', vitals.cls, vitals.cls < 0.05 ? '✅ GOOD' : vitals.cls < 0.25 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
            });
            
            observer.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            console.log('CLS observation not supported');
        }
    }
    
    // First Contentful Paint (FCP) - Additional metric
    function observeFCP() {
        try {
            const observer = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const firstEntry = entries[0];
                
                vitals.fcp = Math.round(firstEntry.startTime);
                
                if (typeof gtag === 'function') {
                    gtag('event', 'web_vitals', {
                        event_category: 'performance',
                        metric_name: 'FCP',
                        metric_value: vitals.fcp,
                        custom_parameter_1: vitals.fcp < 1800 ? 'good' : vitals.fcp < 3000 ? 'needs_improvement' : 'poor'
                    });
                }
                
                console.log('FCP:', vitals.fcp + 'ms', vitals.fcp < 1800 ? '✅ GOOD' : vitals.fcp < 3000 ? '⚠️ NEEDS IMPROVEMENT' : '❌ POOR');
            });
            
            observer.observe({ entryTypes: ['paint'] });
        } catch (e) {
            console.log('FCP observation not supported');
        }
    }
    
    // Initialize all observers
    function init() {
        observeLCP();
        observeINP();
        observeCLS();
        observeFCP();
        
        // Send summary after page is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                console.group('📊 Core Web Vitals Summary');
                console.log('LCP (Largest Contentful Paint):', vitals.lcp + 'ms', '(Target: <2000ms)');
                console.log('INP (Interaction to Next Paint):', vitals.inp ? vitals.inp + 'ms' : 'No interactions yet', '(Target: <150ms)');
                console.log('CLS (Cumulative Layout Shift):', vitals.cls, '(Target: <0.05)');
                console.log('FCP (First Contentful Paint):', vitals.fcp + 'ms', '(Target: <1800ms)');
                console.groupEnd();
                
                // Send to GA4 for analysis
                if (typeof gtag === 'function') {
                    gtag('event', 'performance_summary', {
                        event_category: 'performance',
                        lcp_score: vitals.lcp,
                        inp_score: vitals.inp || 0,
                        cls_score: vitals.cls,
                        fcp_score: vitals.fcp,
                        page_url: window.location.pathname
                    });
                }
            }, 1000);
        });
    }
    
    // Start monitoring when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
