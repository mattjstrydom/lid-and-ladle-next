import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!email || !String(email).includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    await prisma.contactSubmission.create({
      data: {
        name: name || '',
        email: String(email),
        phone: phone || null,
        message: message || '',
      },
    })

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Lid & Ladle Website <onboarding@resend.dev>',
      to: ['annelstrydom85@gmail.com'],
      subject: `New contact form submission from ${name || 'Website visitor'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || '—'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message || '—'}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}