import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function POST(req)
{
    try
    {
        const data = await req.json();
        const { fullName, email, industry } = data;

        if (!fullName || !email || !industry)
        {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }
        const response = NextResponse.json({ success: true });
        sendEmails(data).catch((err) =>
        {
            console.error("Email sending failed:", err);
        });

        return response;

    } catch (error)
    {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

async function sendEmails(data)
{
    const {
        fullName,
        email,
        industry,
        message,
        requests,
        company,
        country,
        companyName = "Teora",
        companyWebsite = "https://teora.ddtsoftwareandecommerce.com/",
        companyEmail = "Info@Teoralife.com",
        companyPhone = "+91 (705) 255-1583",
    } = data;

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const pdf1 = path.join(
        process.cwd(),
        "public/email-pdf/SHRIMP_SOLUTIONS_TEORA-DIGITAL.pdf"
    );
    const pdf2 = path.join(
        process.cwd(),
        "public/email-pdf/TRIAL_REPORT_SHRIMP_ Request.pdf"
    );

    if (!fs.existsSync(pdf1) || !fs.existsSync(pdf2))
    {
        throw new Error("PDF file missing");
    }
    transporter.sendMail({
        from: `"Teora – Website Contact Form" <${process.env.SMTP_USER}>`,
        to: "toponsearch2015@gmail.com",
        subject: `New Contact Form Submission from ${fullName}`,
        html: ` 
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New Contact Form Submission</title>
                    </head>
                    <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
                        <tr>
                        <td style="padding: 40px 20px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(58, 40, 86, 0.1);">
                            <tr>
                                <td style="background: linear-gradient(135deg, #3A2856 0%, #5a4076 100%); padding: 40px 50px; text-align: center;"> 
                                <img src="https://teora.ddtsoftwareandecommerce.com/logo/footer-logo.png" alt="Company Logo" style="max-width: 80px; height: auto; margin-bottom: 0px;">
                                <h1 style="margin: 0; color: #E6E1DA; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Contact Form Submission</h1>
                                </td>
                            </tr> 
                            <tr>
                                <td style="background-color: #E6E1DA; padding: 16px 50px; border-bottom: 3px solid #3A2856;">
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                    <td style="color: #3A2856; font-size: 14px; font-weight: 500;">
                                        📬 You have received a new inquiry
                                    </td>
                                    <td style="text-align: right; color: #3A2856; font-size: 13px; opacity: 0.8;">
                                        ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                    </td>
                                    </tr>
                                </table>
                                </td>
                            </tr> 
                            <tr>
                                <td style="padding: 40px 50px;"> 
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #faf9f7; border-radius: 8px; border-left: 4px solid #3A2856; margin-bottom: 30px;">
                                    <tr>
                                    <td style="padding: 25px;">
                                        <h2 style="margin: 0 0 20px 0; color: #3A2856; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Contact Details</h2>
                                        
                                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="padding: 8px 0; border-bottom: 1px solid #e8e5e0;">
                                            <span style="color: #7a6b8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</span><br>
                                            <span style="color: #3A2856; font-size: 15px; font-weight: 500;">${fullName}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; border-bottom: 1px solid #e8e5e0;">
                                            <span style="color: #7a6b8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</span><br>
                                            <a href="mailto:${email}" style="color: #3A2856; font-size: 15px; font-weight: 500; text-decoration: none;">${email}</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; border-bottom: 1px solid #e8e5e0;">
                                            <span style="color: #7a6b8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Company</span><br>
                                            <span style="color: #3A2856; font-size: 15px; font-weight: 500;">${company}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; border-bottom: 1px solid #e8e5e0;">
                                            <span style="color: #7a6b8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Industry</span><br>
                                            <span style="color: #3A2856; font-size: 15px; font-weight: 500;">${industry}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0;">
                                            <span style="color: #7a6b8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Country</span><br>
                                            <span style="color: #3A2856; font-size: 15px; font-weight: 500;">${country}</span>
                                            </td>
                                        </tr>
                                        </table>
                                    </td>
                                    </tr>
                                </table>
                                
                                <!-- Requests -->
                                ${requests && requests.length > 0 ? `
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                                    <tr>
                                    <td>
                                        <h3 style="margin: 0 0 15px 0; color: #3A2856; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Requests</h3>
                                        <table role="presentation" cellpadding="0" cellspacing="0">
                                        <tr>
                                            ${requests.map(req => `
                                            <td style="padding: 6px 12px; background-color: #3A2856; color: #E6E1DA; font-size: 13px; border-radius: 20px; margin-right: 6px; margin-bottom: 6px;  display: inline-block;">${req}</td>
                                            `).join('')}
                                        </tr>
                                        </table>
                                    </td>
                                    </tr>
                                </table>
                                ` : ''}
                                
                                <!-- Message -->
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                    <td>
                                        <h3 style="margin: 0 0 15px 0; color: #3A2856; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
                                        <div style="background-color: #faf9f7; padding: 20px; border-radius: 8px; border: 1px solid #e8e5e0;">
                                             <p style="margin: 0; color: #4a4a4a; font-size: 15px; line-height: 1.7;">${message}</p>
                                        </div>
                                    </td>
                                    </tr>
                                </table> 
                                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 35px;">
                                    <tr>
                                    <td style="text-align: center;">
                                        <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #3A2856 0%, #5a4076 100%); color: #E6E1DA; padding: 14px 35px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(58, 40, 86, 0.3);">Reply to ${fullName}</a>
                                    </td>
                                    </tr>
                                </table>
                                </td>
                            </tr>  
                            <tr>
                                <td style="background-color: #3A2856; padding: 25px 50px; text-align: center;">
                                <p style="margin: 0; color: #E6E1DA; font-size: 12px; opacity: 0.8;">This is an automated notification from your website contact form.</p>
                                </td>
                            </tr>
                            
                            </table>
                        </td>
                        </tr>
                    </table>
                    </body>
                 </html>
            `,
    });
    transporter.sendMail({
        from: `"Teora" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank you for contacting us!",
        html: `
                  <!DOCTYPE html>
                        <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Thank You for Contacting Us</title>
                        </head>
                        <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
                            <tr>
                            <td style="padding: 40px 20px;">
                                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(58, 40, 86, 0.1);">
                                 
                                <tr>
                                    <td style="background: linear-gradient(135deg, #3A2856 0%, #5a4076 100%); padding: 50px; text-align: center;"> 
                                    <img src="https://teora.ddtsoftwareandecommerce.com/logo/footer-logo.png" alt="Company Logo" style="max-width: 80px; height: auto; margin-bottom: 0px;">
                                    <h1 style="margin: 0; color: #E6E1DA; font-size: 28px; font-weight: 300; letter-spacing: 1px;">Thank You!</h1>
                                    </td>
                                </tr>
                                 
                                <tr>
                                    <td style="padding: 50px;"> 
                                    <p style="margin: 0 0 25px 0; color: #3A2856; font-size: 18px; font-weight: 500;">Dear ${fullName},</p>  
                                    <p style="margin: 0 0 20px 0; color: #4a4a4a; font-size: 15px; line-height: 1.8;">
                                        Thank you for reaching out to us. We're thrilled to hear from you and truly appreciate you taking the time to get in touch.
                                    </p> 
                                    <p style="margin: 0 0 30px 0; color: #4a4a4a; font-size: 15px; line-height: 1.8;">
                                        Our team has received your message and is reviewing your inquiry. We typically respond within <strong style="color: #3A2856;">24-48 business hours</strong>. In the meantime, feel free to explore our website or reach out if you have any urgent questions.
                                    </p>
                                     
                                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #E6E1DA; border-radius: 8px; margin-bottom: 35px;">
                                        <tr>
                                        <td style="padding: 25px;">
                                            <h3 style="margin: 0 0 15px 0; color: #3A2856; font-size: 16px; font-weight: 600;">What happens next?</h3>
                                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="padding: 8px 0; vertical-align: top; width: 30px;">
                                                <span style="display: inline-block; width: 24px; height: 24px; background-color: #3A2856; color: #E6E1DA; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600;">1</span>
                                                </td>
                                                <td style="padding: 8px 0 8px 15px; color: #4a4a4a; font-size: 14px; line-height: 1.6;">
                                                Our team reviews your inquiry and assigns it to the right specialist.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; vertical-align: top; width: 30px;">
                                                <span style="display: inline-block; width: 24px; height: 24px; background-color: #3A2856; color: #E6E1DA; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600;">2</span>
                                                </td>
                                                <td style="padding: 8px 0 8px 15px; color: #4a4a4a; font-size: 14px; line-height: 1.6;">
                                                We'll reach out via email with answers to your questions.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; vertical-align: top; width: 30px;">
                                                <span style="display: inline-block; width: 24px; height: 24px; background-color: #3A2856; color: #E6E1DA; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600;">3</span>
                                                </td>
                                                <td style="padding: 8px 0 8px 15px; color: #4a4a4a; font-size: 14px; line-height: 1.6;">
                                                If needed, we'll schedule a call to discuss your requirements in detail.
                                                </td>
                                            </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                     
                                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 35px;">
                                            <tr>
                                            <td style="text-align: center;">
                                                <a href="${companyWebsite}" style="display: inline-block; background: linear-gradient(135deg, #3A2856 0%, #5a4076 100%); color: #E6E1DA; padding: 16px 40px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(58, 40, 86, 0.3);">Visit Our Website</a>
                                            </td>
                                            </tr>
                                        </table> 
                                    
                                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #e8e5e0; padding-top: 30px;">
                                            <tr>
                                                <td>
                                                    <p style="margin: 0 0 5px 0; color: #4a4a4a; font-size: 15px; line-height: 1.6;">Warm regards,</p>
                                                    <p style="margin: 0 0 20px 0; color: #3A2856; font-size: 16px; font-weight: 600;">The ${companyName} Team</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                 
                                <tr>
                                    <td style="background-color: #E6E1DA; padding: 30px 50px;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                        <td style="text-align: center;">
                                            <p style="margin: 0 0 15px 0; color: #3A2856; font-size: 14px; font-weight: 600;">Have questions? We're here to help.</p>
                                            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                            <tr>
                                                <td style="padding: 0 15px; text-align: center;">
                                                <a href="mailto:${companyEmail}" style="color: #3A2856; font-size: 13px; text-decoration: none;">📧 ${companyEmail}</a>
                                                </td>
                                                <td style="padding: 0 15px; text-align: center; border-left: 1px solid #c9c4bc;">
                                                <a href="tel:${companyPhone.replace(/\D/g, '')}" style="color: #3A2856; font-size: 13px; text-decoration: none;">📞 ${companyPhone}</a>
                                                </td>
                                            </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                    </td>
                                </tr>
                                 
                                <tr>
                                    <td style="background-color: #3A2856; padding: 25px 50px; text-align: center;"> 
                                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 auto 15px auto;">
                                        <tr>
                                        <td style="padding: 0 10px;">
                                            <a href="#" style="color: #E6E1DA; text-decoration: none; font-size: 12px;">LinkedIn</a>
                                        </td>
                                        <td style="padding: 0 10px; border-left: 1px solid rgba(230, 225, 218, 0.3);">
                                            <a href="#" style="color: #E6E1DA; text-decoration: none; font-size: 12px;">Twitter</a>
                                        </td>
                                        <td style="padding: 0 10px; border-left: 1px solid rgba(230, 225, 218, 0.3);">
                                            <a href="#" style="color: #E6E1DA; text-decoration: none; font-size: 12px;">Instagram</a>
                                        </td>
                                        </tr>
                                    </table>
                                    <p style="margin: 0; color: #E6E1DA; font-size: 11px; opacity: 0.7;">© ${new Date().getFullYear()} ${companyName}. All rights reserved.</p>
                                    <p style="margin: 10px 0 0 0; color: #E6E1DA; font-size: 11px; opacity: 0.6;">
                                        You're receiving this email because you submitted a contact form on our website.
                                    </p>
                                    </td>
                                </tr>
                                
                                </table>
                            </td>
                            </tr>
                        </table>
                        </body>
                        </html> 
                   `,
        attachments: [
            { filename: "SHRIMP_SOLUTIONS_TEORA-DIGITAL.pdf", path: pdf1 },
            { filename: "TRIAL_REPORT_SHRIMP_Request.pdf", path: pdf2 },
        ],
    });
}
