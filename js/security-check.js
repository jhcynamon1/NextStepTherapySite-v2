(function() {
  // Configuration: Blocked Timezones (broad matching)
  const BLOCKED_REGIONS = [
    'Asia/Singapore',
    'Europe/Moscow',
    'Asia/Krasnoyarsk',
    'Asia/Omsk',
    'Asia/Yekaterinburg',
    'Asia/Irkutsk',
    'Asia/Yakutsk',
    'Asia/Vladivostok',
    'Asia/Magadan',
    'Asia/Kamchatka',
    'Europe/Samara',
    'Europe/Kaliningrad'
  ];

  // Check if already verified
  if (localStorage.getItem('nst_security_verified') === 'true') {
    return;
  }

  // Get User Timezone
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Check if user is in a blocked region
  const isSuspicious = BLOCKED_REGIONS.some(region => userTimezone.includes(region));

  if (isSuspicious) {
    showChallenge();
  }

  function showChallenge() {
    // Create Overlay
    const overlay = document.createElement('div');
    overlay.id = 'security-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.95);
      z-index: 99999;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: sans-serif;
      text-align: center;
      padding: 20px;
    `;

    // Create Content Box
    const content = document.createElement('div');
    content.style.cssText = `
      background: #fff;
      color: #333;
      padding: 30px;
      border-radius: 8px;
      max-width: 400px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
    `;

    content.innerHTML = `
      <h2 style="margin-top:0;">Security Check</h2>
      <p>We've detected a connection from a region outside our primary service area (${userTimezone}).</p>
      <p>Please confirm you are a human visitor to continue.</p>
      <button id="verify-human" style="
        background: #2e7d32;
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
      ">I am a human visitor</button>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Add Event Listener
    document.getElementById('verify-human').addEventListener('click', function() {
      localStorage.setItem('nst_security_verified', 'true');
      document.body.removeChild(overlay);
    });
  }
})();
