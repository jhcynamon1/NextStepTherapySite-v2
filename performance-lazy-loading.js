/**
 * NextStep Therapy - Mobile Performance Lazy Loading
 * Implements intersection observer for lazy loading images
 */

// Lazy loading implementation
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Replace data-src with src
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('lazy-loaded');
                        observer.unobserve(img);
                    }
                    
                    // Handle picture elements
                    const sources = img.parentElement.querySelectorAll('source[data-srcset]');
                    sources.forEach(source => {
                        source.srcset = source.dataset.srcset;
                        source.removeAttribute('data-srcset');
                    });
                }
            });
        }, {
            rootMargin: '50px 0px',  // Start loading 50px before entering viewport
            threshold: 0.01
        });

        // Observe all lazy images
        document.querySelectorAll('img[data-src], img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Critical resource preloading
function preloadCriticalResources() {
    // Preload above-the-fold images based on viewport
    const isMobile = window.innerWidth <= 768;
    const heroImage = isMobile ? 'hero-background-mobile.webp' : 'hero-background.webp';
    
    // Create preload link if not already exists
    if (!document.querySelector(`link[href="${heroImage}"]`)) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = heroImage;
        document.head.appendChild(preloadLink);
    }
}

// Performance monitoring
function trackPerformanceMetrics() {
    if ('PerformanceObserver' in window) {
        try {
            // Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                
                if (typeof gtag === 'function') {
                    gtag('event', 'page_timing', {
                        name: 'LCP',
                        value: Math.round(lastEntry.startTime)
                    });
                }
            });
            lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

            // First Input Delay
            const fidObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (typeof gtag === 'function') {
                        gtag('event', 'page_timing', {
                            name: 'FID',
                            value: Math.round(entry.processingStart - entry.startTime)
                        });
                    }
                }
            });
            fidObserver.observe({ type: 'first-input', buffered: true });

        } catch (e) {
            console.warn('Performance monitoring not supported');
        }
    }
}

// Enhanced image error handling
function handleImageErrors() {
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            const img = e.target;
            
            // Try WebP fallback first
            if (img.src.includes('.png') || img.src.includes('.jpg')) {
                const webpSrc = img.src.replace(/\.(png|jpg)$/, '-optimized.webp');
                if (img.src !== webpSrc) {
                    img.src = webpSrc;
                    return;
                }
            }
            
            // Final fallback
            img.style.display = 'none';
            console.warn('Image failed to load:', img.src);
        }
    }, true);
}

// Connection-aware loading
function adaptToConnection() {
    if ('connection' in navigator) {
        const connection = navigator.connection;
        
        // Reduce quality on slow connections
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            document.documentElement.classList.add('slow-connection');
        }
        
        // Preload more aggressively on fast connections
        if (connection.effectiveType === '4g') {
            document.documentElement.classList.add('fast-connection');
        }
    }
}

// Initialize all performance optimizations
function initMobilePerformance() {
    // Critical path optimizations
    preloadCriticalResources();
    adaptToConnection();
    handleImageErrors();
    
    // Defer non-critical operations
    requestIdleCallback(() => {
        initLazyLoading();
        trackPerformanceMetrics();
    });
}

// Start performance optimizations immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobilePerformance);
} else {
    initMobilePerformance();
}