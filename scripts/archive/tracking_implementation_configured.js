#!/usr/bin/env node

/**
 * NextStep Therapy - Complete Tracking Implementation
 * Connects GSC keyword data to actual conversions and revenue
 * CONFIGURED FOR: G-J8H4YBGSHR
 */

// Enhanced Google Analytics 4 Setup for Therapy Business
const GA4_CONFIG = {
  MEASUREMENT_ID: 'G-J8H4YBGSHR',
  ENHANCED_CONVERSIONS: true,
  THERAPY_CONVERSION_VALUE: 150, // Average consultation value
  SESSION_CONVERSION_VALUE: 200  // Average therapy session value
};

// Call Tracking Configuration
const CALL_TRACKING = {
  ORGANIC_NUMBER: '647-555-0100', // SEO tracking number
  DIRECT_NUMBER: '647-555-0101',  // Regular business number
  PROVIDER: 'calltrackingmetrics' // or 'callrail'
};

/**
 * Main tracking initialization
 */
function initializeTracking() {
  console.log('🚀 Initializing NextStep Therapy conversion tracking...');
  
  // Set up Google Analytics 4
  setupGA4();
  
  // Initialize conversion tracking
  setupConversionTracking();
  
  // Set up call tracking
  setupCallTracking();
  
  // Initialize form tracking
  setupFormTracking();
  
  // Set up attribution tracking
  setupAttributionTracking();
  
  console.log('✅ Tracking initialization complete');
}

/**
 * Google Analytics 4 Setup
 */
function setupGA4() {
  // Create GA4 script tag
  const ga4Script = document.createElement('script');
  ga4Script.async = true;
  ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_CONFIG.MEASUREMENT_ID}`;
  document.head.appendChild(ga4Script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', GA4_CONFIG.MEASUREMENT_ID, {
    'allow_enhanced_conversions': GA4_CONFIG.ENHANCED_CONVERSIONS,
    'allow_google_signals': true,
    'send_page_view': true,
    'custom_map': {
      'custom_parameter_1': 'therapy_type',
      'custom_parameter_2': 'landing_page',
      'custom_parameter_3': 'user_intent'
    }
  });
  
  // Make gtag globally available
  window.gtag = gtag;
  
  console.log('✅ GA4 initialized');
}

/**
 * Therapy-specific conversion tracking
 */
function setupConversionTracking() {
  
  // Track therapy consultation requests
  window.trackTherapyConversion = function(type, value = GA4_CONFIG.THERAPY_CONVERSION_VALUE) {
    gtag('event', 'conversion', {
      'send_to': GA4_CONFIG.MEASUREMENT_ID,
      'event_category': 'therapy_lead',
      'event_label': type,
      'value': value,
      'currency': 'CAD',
      'custom_parameters': {
        'therapy_type': getTherapyType(),
        'landing_page': window.location.pathname,
        'user_intent': getUserIntent(),
        'session_duration': getSessionDuration()
      }
    });
    
    console.log(`📊 Conversion tracked: ${type} ($${value})`);
  };
  
  // Track high-value actions
  window.trackHighValueAction = function(action) {
    gtag('event', action, {
      'event_category': 'engagement',
      'event_label': 'high_value',
      'custom_parameters': {
        'page_category': getPageCategory(),
        'therapy_type': getTherapyType()
      }
    });
  };
  
  console.log('✅ Conversion tracking setup complete');
}

/**
 * Dynamic call tracking based on traffic source
 */
function setupCallTracking() {
  document.addEventListener('DOMContentLoaded', function() {
    const isOrganic = isOrganicTraffic();
    const phoneNumber = isOrganic ? CALL_TRACKING.ORGANIC_NUMBER : CALL_TRACKING.DIRECT_NUMBER;
    
    // Update all phone numbers on page
    updatePhoneNumbers(phoneNumber);
    
    // Track phone clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
      link.addEventListener('click', function() {
        gtag('event', 'phone_call', {
          'event_category': 'conversion',
          'event_label': isOrganic ? 'organic_call' : 'direct_call',
          'value': GA4_CONFIG.THERAPY_CONVERSION_VALUE
        });
        
        // Also track as therapy conversion
        trackTherapyConversion('phone_call', GA4_CONFIG.THERAPY_CONVERSION_VALUE);
      });
    });
    
    console.log(`📞 Call tracking active: ${phoneNumber} (${isOrganic ? 'organic' : 'direct'})`);
  });
}

/**
 * Enhanced form tracking with therapy-specific fields
 */
function setupFormTracking() {
  document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      let formStarted = false;
      
      // Track form start
      form.addEventListener('focusin', function() {
        if (!formStarted) {
          formStarted = true;
          gtag('event', 'form_start', {
            'event_category': 'engagement',
            'event_label': form.id || 'contact_form',
            'custom_parameters': {
              'therapy_type': getTherapyType(),
              'landing_page': window.location.pathname
            }
          });
        }
      });
      
      // Track form submission
      form.addEventListener('submit', function(e) {
        // Populate hidden tracking fields
        populateTrackingFields(form);
        
        // Get therapy type from form
        const therapyTypeField = form.querySelector('[name="therapy_type"]');
        const therapyType = therapyTypeField ? therapyTypeField.value : 'general';
        
        // Track conversion
        trackTherapyConversion(`form_submission_${therapyType}`, GA4_CONFIG.THERAPY_CONVERSION_VALUE);
        
        // Track detailed form data
        gtag('event', 'generate_lead', {
          'event_category': 'conversion',
          'event_label': 'contact_form',
          'value': GA4_CONFIG.THERAPY_CONVERSION_VALUE,
          'currency': 'CAD',
          'custom_parameters': {
            'therapy_type': therapyType,
            'form_id': form.id || 'contact_form',
            'landing_page': window.location.pathname,
            'session_duration': getSessionDuration()
          }
        });
        
        console.log(`📝 Form submission tracked: ${therapyType}`);
      });
    });
    
    console.log(`✅ Form tracking active on ${forms.length} forms`);
  });
}

/**
 * Attribution tracking - connects GSC keywords to conversions
 */
function setupAttributionTracking() {
  // Store landing page for session attribution
  if (!sessionStorage.getItem('landing_page')) {
    sessionStorage.setItem('landing_page', window.location.pathname);
    sessionStorage.setItem('landing_time', Date.now().toString());
  }
  
  // Store referrer for attribution
  if (document.referrer && !sessionStorage.getItem('referrer')) {
    sessionStorage.setItem('referrer', document.referrer);
  }
  
  // Track organic sessions
  if (isOrganicTraffic()) {
    gtag('event', 'organic_session_start', {
      'event_category': 'attribution',
      'event_label': 'seo_traffic',
      'custom_parameters': {
        'landing_page': window.location.pathname,
        'therapy_type': getTherapyType(),
        'page_category': getPageCategory()
      }
    });
  }
  
  console.log('✅ Attribution tracking initialized');
}

/**
 * Utility Functions
 */

// Determine if traffic is organic search
function isOrganicTraffic() {
  const referrer = document.referrer.toLowerCase();
  const hasGclid = window.location.search.includes('gclid');
  
  return (referrer.includes('google.') || 
          referrer.includes('bing.') || 
          referrer.includes('yahoo.')) && !hasGclid;
}

// Update phone numbers on page
function updatePhoneNumbers(number) {
  document.querySelectorAll('.phone-number, [data-phone]').forEach(el => {
    el.textContent = number;
    if (el.tagName === 'A') {
      el.href = 'tel:' + number.replace(/[^0-9]/g, '');
    }
  });
}

// Identify therapy type from page content
function getTherapyType() {
  const url = window.location.pathname.toLowerCase();
  const title = document.title.toLowerCase();
  
  if (url.includes('anxiety') || title.includes('anxiety')) return 'anxiety_therapy';
  if (url.includes('depression') || title.includes('depression')) return 'depression_therapy';
  if (url.includes('couples') || title.includes('couples')) return 'couples_therapy';
  if (url.includes('virtual') || title.includes('virtual')) return 'virtual_therapy';
  if (url.includes('work') || url.includes('stress')) return 'work_stress_therapy';
  if (url.includes('university') || url.includes('student')) return 'student_therapy';
  
  return 'general_therapy';
}

// Identify page category for attribution
function getPageCategory() {
  const url = window.location.pathname;
  
  if (url.includes('/seo/')) return 'seo_page';
  if (url.includes('/services/')) return 'service_page';
  if (url.includes('/virtual/')) return 'virtual_page';
  if (url.includes('/about')) return 'about_page';
  if (url.includes('/contact')) return 'contact_page';
  if (url === '/' || url === '/index.html') return 'homepage';
  
  return 'content_page';
}

// Determine user intent based on behavior
function getUserIntent() {
  const sessionDuration = getSessionDuration();
  const pageViews = parseInt(sessionStorage.getItem('page_views') || '1');
  
  // Update page view count
  sessionStorage.setItem('page_views', (pageViews + 1).toString());
  
  if (sessionDuration > 180000 || pageViews >= 3) return 'high_intent'; // 3+ minutes or 3+ pages
  if (sessionDuration > 60000 || pageViews >= 2) return 'medium_intent'; // 1+ minute or 2+ pages
  
  return 'low_intent';
}

// Get session duration in milliseconds
function getSessionDuration() {
  const landingTime = parseInt(sessionStorage.getItem('landing_time') || Date.now().toString());
  return Date.now() - landingTime;
}

// Populate hidden form fields for attribution
function populateTrackingFields(form) {
  const fields = {
    'landing_page': sessionStorage.getItem('landing_page') || window.location.pathname,
    'referrer': sessionStorage.getItem('referrer') || document.referrer,
    'session_duration': getSessionDuration().toString(),
    'therapy_type': getTherapyType(),
    'user_intent': getUserIntent(),
    'page_views': sessionStorage.getItem('page_views') || '1'
  };
  
  Object.keys(fields).forEach(fieldName => {
    let field = form.querySelector(`[name="${fieldName}"]`);
    if (!field) {
      field = document.createElement('input');
      field.type = 'hidden';
      field.name = fieldName;
      form.appendChild(field);
    }
    field.value = fields[fieldName];
  });
}

/**
 * Booking widget tracking (Jane App integration)
 */
function setupBookingTracking() {
  // Track booking widget interactions
  document.addEventListener('click', function(e) {
    if (e.target.closest('.jane-booking-widget') || 
        e.target.closest('[data-booking]')) {
      
      gtag('event', 'begin_checkout', {
        'event_category': 'booking',
        'event_label': 'jane_app_widget',
        'value': GA4_CONFIG.SESSION_CONVERSION_VALUE,
        'custom_parameters': {
          'therapy_type': getTherapyType(),
          'booking_source': 'website_widget'
        }
      });
      
      trackTherapyConversion('booking_start', GA4_CONFIG.SESSION_CONVERSION_VALUE);
    }
  });
}

/**
 * Initialize everything when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTracking);
} else {
  initializeTracking();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initializeTracking,
    trackTherapyConversion: window.trackTherapyConversion,
    GA4_CONFIG,
    CALL_TRACKING
  };
}
