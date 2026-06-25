import { NextResponse } from 'next/server'
import sql, { ensureTableExists } from '../../../lib/db'

export async function POST(request: Request) {
  try {
    const { name, email, topic, message } = await request.json()
    
    if (!name || !email || !topic || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await ensureTableExists()

    await sql`
      INSERT INTO contact_submissions (name, email, topic, message)
      VALUES (${name}, ${email}, ${topic}, ${message})
    `

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Database POST error:", err)
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await ensureTableExists()
    const submissions = await sql`
      SELECT id, name, email, topic, message, created_at
      FROM contact_submissions
      ORDER BY created_at DESC
    `
    return NextResponse.json(submissions)
  } catch (err: any) {
    console.error("Database GET error:", err)
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Missing submission ID' }, { status: 400 })
    }

    await ensureTableExists()
    await sql`
      DELETE FROM contact_submissions
      WHERE id = ${parseInt(id, 10)}
    `

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error("Database DELETE error:", err)
    return NextResponse.json({ error: 'Failed to delete submission' }, { status: 500 })
  }
}
