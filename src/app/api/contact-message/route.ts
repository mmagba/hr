import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_SENDER_USER,
                pass: process.env.GMAIL_SENDER_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_SENDER_USER,
            to: process.env.GMAIL_RECEIVER,
            replyTo: email,
            subject: `הודעה חדשה מדף יצירת קשר - ${name}`,
            html: `
                <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #333;">הודעה חדשה מדף יצירת קשר</h2>
                    <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">שם</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">דוא"ל</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">הודעה</td>
                            <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${message}</td>
                        </tr>
                    </table>
                </div>
            `,
        });

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Contact message email error:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
