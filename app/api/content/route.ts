import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'

const filePath = path.join(process.cwd(), 'data', 'content.json')

export async function GET() {
  try {
    const file = fs.readFileSync(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(file))
  } catch {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8')
    revalidatePath('/')
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 })
  }
}
