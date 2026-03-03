import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, phone, city } = body;

        // In a real application, send an email to a dummy email address
        // For now we will mock the email sending process
        console.log("Mock Email Sent!");
        console.log("To: dummy@example.com");
        console.log("Subject: New Job Application Received");
        console.log(`Details: 
    Name: ${fullName}
    Phone: ${phone}
    City: ${city}`);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
