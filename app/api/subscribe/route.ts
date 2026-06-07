import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !String(email).includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    await prisma.emailSubscriber.upsert({
      where: { email: String(email) },
      update: {},
      create: { email: String(email) },
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
