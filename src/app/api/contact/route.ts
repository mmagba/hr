import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, phone, city } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: 'mahmoud.moaad@gmail.com',
            subject: 'פנייה חדשה מהאתר - New Job Application',
            html: `
                <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #333;">פנייה חדשה מהאתר</h2>
                    <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">שם מלא</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">טלפון</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f5f5f5;">עיר</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">${city}</td>
                        </tr>
                    </table>
                </div>
            `,
        });

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
