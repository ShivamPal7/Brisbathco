import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, suburb, projectType, message } = body;

    // Validate request body
    if (!firstName || !lastName || !email || !phone || !suburb) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure the email transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.SMTP_FROM || '"Brisbane Bath Oasis" <noreply@brisbathco.com.au>', // sender address
      to: process.env.CONTACT_EMAIL || 'info@brisbathco.com.au', // list of receivers (the business owner)
      replyTo: email,
      subject: `New Lead: ${projectType || 'General Inquiry'} from ${firstName} ${lastName} (${suburb})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Lead</title>
        </head>
        <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7ede8; padding: 20px; margin: 0; color: #1c1917;-webkit-font-smoothing: antialiased;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <!-- Header -->
            <div style="background-color: #bd6b33; padding: 32px 24px; text-align: center;">
              <h1 style="font-family: 'Playfair Display', Georgia, serif; color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">New Lead Received</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px; letter-spacing: 0.5px;">Brisbane Bath Oasis</p>
            </div>
            
            <!-- Content -->
            <div style="padding: 32px 24px;">
              <h2 style="font-family: 'Playfair Display', Georgia, serif; font-size: 22px; color: #1c1917; margin-top: 0; margin-bottom: 24px; border-bottom: 1px solid #e7e5e4; padding-bottom: 12px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; width: 140px; color: #78716c; font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-size: 16px;"><strong>${firstName} ${lastName}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-size: 16px;"><a href="mailto:${email}" style="color: #bd6b33; text-decoration: none; font-weight: 500;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-size: 16px;"><a href="tel:${phone}" style="color: #bd6b33; text-decoration: none; font-weight: 500;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Suburb</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-size: 16px;"><strong>${suburb}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #78716c; font-weight: 500; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Project Type</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f4; color: #1c1917; font-size: 16px;">
                    <span style="background-color: #ffedd5; padding: 6px 12px; border-radius: 99px; font-size: 13px; font-weight: 600; color: #9a3412;">
                      ${projectType || 'Not specified'}
                    </span>
                  </td>
                </tr>
              </table>

              <h2 style="font-family: 'Playfair Display', Georgia, serif; font-size: 22px; color: #1c1917; margin-top: 0; margin-bottom: 16px;">Message</h2>
              <div style="background-color: #fafaf9; border-left: 4px solid #bd6b33; padding: 20px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #44403c; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message ? message.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'No additional details provided.'}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 24px; text-align: center; background-color: #fafaf9; border-top: 1px solid #e7e5e4;">
              <p style="margin: 0; color: #a8a29e; font-size: 13px;">This email was sent from the contact form on brisbathco.com.au</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: String(error) },
      { status: 500 }
    );
  }
}
