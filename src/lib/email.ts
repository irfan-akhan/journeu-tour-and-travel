import nodemailer from 'nodemailer';

const TO_EMAIL = process.env.TO_EMAIL || 'contact@journeu.com';
const WEBSITE_URL = 'https://journeu.com';

// Create transporter with Gmail SMTP
const createTransporter = () => {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
};

// Shared email styles
const emailStyles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; }
  .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; }
  .header { background: linear-gradient(135deg, #0A4D5C 0%, #1BA5B8 50%, #0A4D5C 100%); padding: 40px 30px; text-align: center; }
  .header-icon { font-size: 48px; margin-bottom: 15px; }
  .header h1 { color: #ffffff; font-size: 28px; font-weight: 700; margin-bottom: 8px; }
  .header p { color: rgba(255,255,255,0.9); font-size: 14px; }
  .badge { display: inline-block; background: #FFD84D; color: #0A4D5C; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
  .content { padding: 40px 30px; }
  .greeting { font-size: 18px; color: #0A4D5C; margin-bottom: 20px; }
  .info-card { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px; padding: 25px; margin: 20px 0; border-left: 4px solid #1BA5B8; }
  .info-row { display: flex; padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
  .info-row:last-child { border-bottom: none; }
  .info-label { color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; min-width: 120px; }
  .info-value { color: #0A4D5C; font-weight: 600; font-size: 15px; }
  .info-value a { color: #1BA5B8; text-decoration: none; }
  .info-value a:hover { text-decoration: underline; }
  .message-box { background: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; padding: 20px; margin: 20px 0; }
  .message-box p { color: #444; line-height: 1.8; }
  .cta-button { display: inline-block; background: linear-gradient(135deg, #0A4D5C 0%, #1BA5B8 100%); color: #ffffff !important; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 10px 5px; }
  .cta-button.secondary { background: #FFD84D; color: #0A4D5C !important; }
  .priority-badge { display: inline-block; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 600; }
  .priority-high { background: #fee2e2; color: #dc2626; }
  .priority-medium { background: #fef3c7; color: #d97706; }
  .tour-highlight { background: linear-gradient(135deg, #0A4D5C 0%, #1BA5B8 100%); color: #ffffff; padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0; }
  .tour-highlight h3 { font-size: 18px; margin-bottom: 5px; }
  .tour-highlight p { opacity: 0.9; font-size: 13px; }
  .divider { height: 1px; background: linear-gradient(to right, transparent, #ddd, transparent); margin: 30px 0; }
  .footer { background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0; }
  .footer-logo { font-size: 24px; font-weight: 700; color: #0A4D5C; margin-bottom: 10px; }
  .footer-logo span { color: #1BA5B8; }
  .footer p { color: #666; font-size: 12px; margin: 5px 0; }
  .footer-links { margin: 15px 0; }
  .footer-links a { color: #1BA5B8; text-decoration: none; margin: 0 10px; font-size: 13px; }
  .social-links { margin-top: 15px; }
  .social-links a { display: inline-block; margin: 0 8px; color: #666; text-decoration: none; }
  .timestamp { color: #999; font-size: 11px; margin-top: 20px; }
`;

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface NewsletterEmailData {
  email: string;
}

interface CallbackEmailData {
  phone: string;
  preferredTime: string;
}

interface BookingInquiryData {
  name: string;
  email: string;
  phone: string;
  tourName: string;
  tourId: string;
  travelDate?: string;
  travelers?: number;
  message?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, phone, subject, message } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const transporter = createTransporter();

  if (!transporter) {
    console.log('📧 [DEV MODE] Contact email would be sent:');
    console.log('  To:', TO_EMAIL);
    console.log('  From:', email);
    console.log('  Subject:', `Contact Form: ${subject}`);
    console.log('  Name:', name);
    console.log('  Phone:', phone);
    console.log('  Message:', message);
    return { messageId: 'dev-mode-no-email-sent' };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <div class="header-icon">💬</div>
            <h1>New Contact Message</h1>
            <p>Someone reached out through your website</p>
          </div>

          <div class="content">
            <p class="greeting">Hello Team Journeu,</p>
            <p style="color: #666; margin-bottom: 25px;">You have received a new message from your website contact form. Here are the details:</p>

            <div class="info-card">
              <div class="info-row">
                <span class="info-label">👤 Name</span>
                <span class="info-value">${name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">📧 Email</span>
                <span class="info-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">📱 Phone</span>
                <span class="info-value"><a href="tel:${phone}">${phone}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">📋 Subject</span>
                <span class="info-value">${subject}</span>
              </div>
            </div>

            <h3 style="color: #0A4D5C; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">💭 Message</h3>
            <div class="message-box">
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
              <a href="tel:${phone}" class="cta-button secondary">Call Now</a>
            </div>

            <p class="timestamp">Received on ${timestamp} (IST)</p>
          </div>

          <div class="footer">
            <div class="footer-logo">Jour<span>neu</span></div>
            <p>Your Gateway to Kashmir's Beauty</p>
            <div class="footer-links">
              <a href="${WEBSITE_URL}">Website</a>
              <a href="${WEBSITE_URL}/tours">Tours</a>
              <a href="${WEBSITE_URL}/contact">Contact</a>
            </div>
            <p style="margin-top: 15px;">© ${new Date().getFullYear()} Journeu. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: TO_EMAIL,
    replyTo: email,
    subject: `💬 New Contact: ${subject}`,
    html: htmlContent,
  });

  return result;
}

export async function sendNewsletterConfirmation(data: NewsletterEmailData) {
  const { email } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const transporter = createTransporter();

  if (!transporter) {
    console.log('📧 [DEV MODE] Newsletter subscription would be sent:');
    console.log('  To:', TO_EMAIL);
    console.log('  Subscriber Email:', email);
    return { messageId: 'dev-mode-no-email-sent' };
  }

  const adminHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription</title>
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <div class="header-icon">📰</div>
            <h1>New Subscriber!</h1>
            <p>Your newsletter list is growing</p>
          </div>

          <div class="content">
            <div style="text-align: center; padding: 20px 0;">
              <span class="badge">+1 Subscriber</span>
            </div>

            <p class="greeting">Great news!</p>
            <p style="color: #666; margin-bottom: 25px;">A new visitor has subscribed to your newsletter. They're interested in receiving updates about Kashmir tours and travel tips.</p>

            <div class="info-card">
              <div class="info-row">
                <span class="info-label">📧 Email</span>
                <span class="info-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">📅 Subscribed</span>
                <span class="info-value">${timestamp}</span>
              </div>
            </div>

            <div style="background: linear-gradient(135deg, #e8f4f5 0%, #d4edda 100%); padding: 20px; border-radius: 12px; text-align: center; margin-top: 20px;">
              <p style="color: #0A4D5C; font-weight: 600; margin: 0;">💡 Pro Tip</p>
              <p style="color: #666; font-size: 13px; margin-top: 5px;">Add this email to your mailing list to keep them updated about special offers and new tour packages!</p>
            </div>

            <p class="timestamp">Notification sent on ${timestamp} (IST)</p>
          </div>

          <div class="footer">
            <div class="footer-logo">Jour<span>neu</span></div>
            <p>Your Gateway to Kashmir's Beauty</p>
            <p style="margin-top: 15px;">© ${new Date().getFullYear()} Journeu. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: TO_EMAIL,
    subject: '📰 New Newsletter Subscriber',
    html: adminHtml,
  });

  return result;
}

export async function sendCallbackRequest(data: CallbackEmailData) {
  const { phone, preferredTime } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const transporter = createTransporter();

  if (!transporter) {
    console.log('📧 [DEV MODE] Callback request would be sent:');
    console.log('  To:', TO_EMAIL);
    console.log('  Phone:', phone);
    console.log('  Preferred Time:', preferredTime);
    return { messageId: 'dev-mode-no-email-sent' };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Callback Request</title>
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header" style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #dc2626 100%);">
            <div class="header-icon">📞</div>
            <h1>Callback Requested!</h1>
            <p>A customer is waiting for your call</p>
          </div>

          <div class="content">
            <div style="text-align: center; padding: 20px 0;">
              <span class="priority-badge priority-high">⚡ ACTION REQUIRED</span>
            </div>

            <p class="greeting">Urgent Callback Request</p>
            <p style="color: #666; margin-bottom: 25px;">A potential customer has requested a callback. Please reach out to them at their preferred time.</p>

            <div class="info-card" style="border-left-color: #dc2626;">
              <div class="info-row">
                <span class="info-label">📱 Phone</span>
                <span class="info-value" style="font-size: 20px;"><a href="tel:${phone}">${phone}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">⏰ Preferred Time</span>
                <span class="info-value">
                  <span style="background: #FFD84D; color: #0A4D5C; padding: 6px 14px; border-radius: 6px; font-weight: 700;">${preferredTime}</span>
                </span>
              </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="tel:${phone}" class="cta-button" style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); font-size: 16px; padding: 16px 40px;">
                📞 Call ${phone}
              </a>
            </div>

            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-top: 25px; text-align: center;">
              <p style="color: #92400e; font-size: 13px; margin: 0;">
                ⏳ Please call the customer during their preferred time slot for the best chance of conversion.
              </p>
            </div>

            <p class="timestamp">Request received on ${timestamp} (IST)</p>
          </div>

          <div class="footer">
            <div class="footer-logo">Jour<span>neu</span></div>
            <p>Your Gateway to Kashmir's Beauty</p>
            <p style="margin-top: 15px;">© ${new Date().getFullYear()} Journeu. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: TO_EMAIL,
    subject: `🔔 Callback Request - ${preferredTime}`,
    html: htmlContent,
  });

  return result;
}

export async function sendBookingInquiry(data: BookingInquiryData) {
  const { name, email, phone, tourName, tourId, travelDate, travelers, message } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const transporter = createTransporter();

  if (!transporter) {
    console.log('📧 [DEV MODE] Booking inquiry would be sent:');
    console.log('  To:', TO_EMAIL);
    console.log('  Tour:', tourName, `(${tourId})`);
    console.log('  Name:', name);
    console.log('  Email:', email);
    console.log('  Phone:', phone);
    console.log('  Travel Date:', travelDate || 'Not specified');
    console.log('  Travelers:', travelers || 'Not specified');
    console.log('  Message:', message || 'None');
    return { messageId: 'dev-mode-no-email-sent' };
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Booking Inquiry</title>
        <style>${emailStyles}</style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <div class="header-icon">🎫</div>
            <h1>New Booking Inquiry!</h1>
            <p>A customer is interested in booking a tour</p>
          </div>

          <div class="content">
            <div style="text-align: center; padding: 10px 0 20px 0;">
              <span class="priority-badge priority-medium">💰 POTENTIAL BOOKING</span>
            </div>

            <div class="tour-highlight">
              <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; opacity: 0.9;">Tour Package</p>
              <h3>${tourName}</h3>
              <p style="margin-top: 8px;">
                <a href="${WEBSITE_URL}/tours/${tourId}" style="color: #FFD84D; text-decoration: none; font-size: 12px;">View Tour Details →</a>
              </p>
            </div>

            <p class="greeting">Hello Team,</p>
            <p style="color: #666; margin-bottom: 25px;">Great news! <strong>${name}</strong> is interested in booking the above tour package. Here are their details:</p>

            <div class="info-card">
              <div class="info-row">
                <span class="info-label">👤 Name</span>
                <span class="info-value">${name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">📧 Email</span>
                <span class="info-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="info-row">
                <span class="info-label">📱 Phone</span>
                <span class="info-value"><a href="tel:${phone}">${phone}</a></span>
              </div>
              ${travelDate ? `
              <div class="info-row">
                <span class="info-label">📅 Travel Date</span>
                <span class="info-value">${travelDate}</span>
              </div>
              ` : ''}
              ${travelers ? `
              <div class="info-row">
                <span class="info-label">👥 Travelers</span>
                <span class="info-value">${travelers} ${travelers === 1 ? 'person' : 'people'}</span>
              </div>
              ` : ''}
            </div>

            ${message ? `
            <h3 style="color: #0A4D5C; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 25px 0 10px 0;">💭 Customer Message</h3>
            <div class="message-box">
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" class="cta-button">Reply via Email</a>
              <a href="tel:${phone}" class="cta-button secondary">Call Customer</a>
            </div>

            <div class="divider"></div>

            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                <strong>Tour Reference:</strong> ${tourId}<br>
                <strong>Tour URL:</strong> <a href="${WEBSITE_URL}/tours/${tourId}" style="color: #1BA5B8;">${WEBSITE_URL}/tours/${tourId}</a>
              </p>
            </div>

            <p class="timestamp">Inquiry received on ${timestamp} (IST)</p>
          </div>

          <div class="footer">
            <div class="footer-logo">Jour<span>neu</span></div>
            <p>Your Gateway to Kashmir's Beauty</p>
            <div class="footer-links">
              <a href="${WEBSITE_URL}">Website</a>
              <a href="${WEBSITE_URL}/tours">Tours</a>
              <a href="${WEBSITE_URL}/contact">Contact</a>
            </div>
            <p style="margin-top: 15px;">© ${new Date().getFullYear()} Journeu. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: TO_EMAIL,
    replyTo: email,
    subject: `🎫 Booking Inquiry: ${tourName}`,
    html: htmlContent,
  });

  return result;
}
