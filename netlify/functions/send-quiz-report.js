const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email, score, timestamp } = JSON.parse(event.body);

    // Determine tier based on score
    let tier, tierName, recommendations, nextSteps;

    if (score <= 10) {
      tier = 'green';
      tierName = 'Managing Well';
      recommendations = `
        <ul style="line-height: 1.8; color: #5A6B7D;">
          <li>Keep up your current coping strategies - whatever you're doing is working</li>
          <li>Build your mental health toolkit now - it's easier to learn coping skills when you're not in crisis</li>
          <li>Stay connected - maintain relationships and social support</li>
          <li>Monitor changes - retake this assessment if you notice shifts in mood or stress levels</li>
        </ul>
      `;
      nextSteps = `
        <p style="color: #5A6B7D; line-height: 1.8; margin-bottom: 20px;">While therapy isn't urgent for you right now, consider it if major life changes occur or if your score increases significantly in the future.</p>
        <p style="color: #5A6B7D; line-height: 1.8; margin-bottom: 16px;"><strong>Want to stay proactive?</strong> Book a free 15-minute consultation to discuss building your mental health toolkit before challenges arise.</p>
        <a href="https://nextsteptherapy.janeapp.com/?utm_source=quiz&utm_medium=email&utm_campaign=quiz_report_green" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #6B8E6F 0%, #5A7D5E 100%); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; margin-top: 8px;">Book Free Consultation</a>
      `;
    } else if (score <= 20) {
      tier = 'amber';
      tierName = 'Could Benefit from Support';
      recommendations = `
        <ul style="line-height: 1.8; color: #5A6B7D;">
          <li><strong>Therapy isn't just for crises</strong> - think of it like going to the gym for your mental health</li>
          <li><strong>Early intervention works better</strong> - it's easier to develop coping skills now than during a crisis</li>
          <li><strong>You deserve support</strong> - you don't need to be "bad enough" to ask for help</li>
          <li><strong>Try it for 4-6 sessions</strong> - that's often enough to see if it's helpful for you</li>
        </ul>
      `;
      nextSteps = `
        <p style="color: #5A6B7D; line-height: 1.8; margin-bottom: 16px;">This is actually an ideal time to start therapy—<strong>before</strong> things escalate. Many people wait until they're in crisis, but therapy is most effective as a preventive tool.</p>
        <a href="https://nextsteptherapy.janeapp.com/?utm_source=quiz&utm_medium=email&utm_campaign=quiz_report_amber" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #6B8E6F 0%, #5A7D5E 100%); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; margin-top: 8px;">Book Your Free 15-Minute Consultation</a>
      `;
    } else if (score <= 30) {
      tier = 'red';
      tierName = 'Would Benefit Significantly';
      recommendations = `
        <ul style="line-height: 1.8; color: #5A6B7D;">
          <li><strong>You don't have to feel this way</strong> - therapy can help reduce the intensity of what you're experiencing</li>
          <li><strong>It's not weakness</strong> - reaching out is actually a sign of strength and self-awareness</li>
          <li><strong>The earlier, the better</strong> - symptoms tend to respond faster when addressed sooner</li>
          <li><strong>Treatment works</strong> - research shows therapy (especially CBT and ACT) is highly effective for anxiety, depression, and stress</li>
        </ul>
      `;
      nextSteps = `
        <p style="color: #5A6B7D; line-height: 1.8; margin-bottom: 16px;">You're dealing with more than typical life stress right now. The good news? This is exactly what therapy is designed to help with, and you're likely to see meaningful improvement within 6-12 sessions.</p>
        <p style="color: #5A6B7D; line-height: 1.8; margin-bottom: 16px;"><strong>Recommended: Book a consultation within the next 2-4 weeks.</strong></p>
        <a href="https://nextsteptherapy.janeapp.com/" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #EF6F6F 0%, #F28B8B 100%); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; margin-top: 8px;">Book Your Free Consultation Today</a>
      `;
    } else {
      tier = 'urgent';
      tierName = 'Immediate Support Recommended';
      recommendations = `
        <ul style="line-height: 1.8; color: #5A6B7D;">
          <li><strong>This isn't permanent</strong> - with the right support, you can feel significantly better</li>
          <li><strong>You deserve help</strong> - you don't need to white-knuckle through this alone</li>
          <li><strong>Therapy works</strong> - especially when you're motivated to feel better</li>
          <li><strong>Sooner is better</strong> - the faster you get support, the faster you'll start feeling relief</li>
        </ul>
        <div style="background: #FFF9E6; border-left: 4px solid #F5C563; padding: 20px; margin: 20px 0; border-radius: 8px;">
          <h3 style="color: #8B6914; margin-top: 0;">⚠️ In Crisis? Get Immediate Help</h3>
          <p style="color: #8B6914; line-height: 1.8;">If you're having thoughts of self-harm or suicide, please reach out now:</p>
          <ul style="color: #8B6914; line-height: 1.8;">
            <li><strong>Call or text 988</strong> - Canada Suicide Prevention Service (24/7)</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 686868</li>
            <li><strong>ConnexOntario Mental Health:</strong> 1-866-531-2600</li>
          </ul>
        </div>
      `;
      nextSteps = `
        <p style="color: #5A6B7D; line-height: 1.8; margin-bottom: 16px;">You're going through a really difficult time right now, and that's valid. Many people feel this way at some point, and therapy is designed to help you through exactly this kind of struggle.</p>
        <p style="color: #DC3545; line-height: 1.8; margin-bottom: 16px; font-weight: 600;"><strong>Recommended: Book a consultation within the next 7 days.</strong></p>
        <a href="https://nextsteptherapy.janeapp.com/" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #DC3545 0%, #EF6F6F 100%); color: white; text-decoration: none; border-radius: 12px; font-weight: 600; margin-top: 8px;">Book Urgent Consultation</a>
      `;
    }

    // Send personalized email via Resend
    const data = await resend.emails.send({
      from: 'Next Step Therapy <hello@nextsteptherapy.ca>',
      to: [email],
      subject: `Your Personalized Therapy Readiness Report (Score: ${score}/45)`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #F7F9FA;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F7F9FA; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">

                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #E8F4F1 0%, #D4E8E3 100%); padding: 40px 30px; text-align: center;">
                      <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #6B8E6F 0%, #5A7D5E 100%); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                        <span style="color: white; font-size: 28px;">✓</span>
                      </div>
                      <h1 style="font-family: 'Georgia', serif; font-size: 28px; color: #2C3E50; margin: 0 0 12px 0; font-weight: 600;">Your Therapy Readiness Report</h1>
                      <p style="color: #5A6B7D; font-size: 16px; margin: 0;">Personalized insights based on your assessment</p>
                    </td>
                  </tr>

                  <!-- Score Display -->
                  <tr>
                    <td style="padding: 40px 30px; text-align: center; border-bottom: 1px solid #E8F4F1;">
                      <div style="display: inline-block; padding: 30px 50px; background: linear-gradient(135deg, #6B8E6F 0%, #8CB390 100%); border-radius: 16px; color: white;">
                        <div style="font-size: 64px; font-weight: 700; line-height: 1; margin-bottom: 8px;">${score}</div>
                        <div style="font-size: 16px; opacity: 0.9;">out of 45 points</div>
                      </div>
                      <h2 style="font-family: 'Georgia', serif; font-size: 24px; color: #2C3E50; margin: 24px 0 8px 0;">${tierName}</h2>
                    </td>
                  </tr>

                  <!-- Recommendations -->
                  <tr>
                    <td style="padding: 30px 30px 20px;">
                      <h3 style="font-family: 'Georgia', serif; font-size: 20px; color: #2C3E50; margin: 0 0 16px 0;">Your Personalized Recommendations</h3>
                      ${recommendations}
                    </td>
                  </tr>

                  <!-- Next Steps -->
                  <tr>
                    <td style="padding: 20px 30px 40px;">
                      <h3 style="font-family: 'Georgia', serif; font-size: 20px; color: #2C3E50; margin: 0 0 16px 0;">Next Steps</h3>
                      ${nextSteps}
                    </td>
                  </tr>

                  <!-- About Section -->
                  <tr>
                    <td style="padding: 30px; background: #F7F9FA; border-top: 1px solid #E8F4F1;">
                      <h3 style="font-family: 'Georgia', serif; font-size: 18px; color: #2C3E50; margin: 0 0 12px 0;">About Next Step Therapy</h3>
                      <p style="color: #5A6B7D; line-height: 1.8; margin: 0 0 16px 0;">I'm Jesse Cynamon, a CRPO-registered psychotherapist (#10979) specializing in Acceptance and Commitment Therapy. I help Ontarians navigate anxiety, workplace stress, and life transitions through evidence-based virtual therapy.</p>
                      <p style="color: #5A6B7D; line-height: 1.8; margin: 0;">
                        <strong>📞 Phone:</strong> (416) 306-2157<br>
                        <strong>🌐 Website:</strong> <a href="https://nextsteptherapy.ca" style="color: #6B8E6F;">nextsteptherapy.ca</a><br>
                        <strong>✅ Credentials:</strong> CRPO #10979, MPsy, ACT & CBT Training
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 30px; text-align: center; background: #2C3E50; color: #8A9BA8; font-size: 13px;">
                      <p style="margin: 0 0 8px 0;">© ${new Date().getFullYear()} Next Step Therapy Ontario</p>
                      <p style="margin: 0;">You received this email because you completed our therapy readiness assessment.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        messageId: data.id
      })
    };

  } catch (error) {
    console.error('Resend API error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
