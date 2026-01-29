import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

// GET single user by ID
export async function GET(request, { params }) {
  try {
    const { id } = await params
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    )
  }
}

// PUT update user by ID
export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()
    const { email, name, age } = body

    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        email,
        name,
        age: age ? parseInt(age) : null
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    )
  }
}

// DELETE user by ID
export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    await prisma.user.delete({
      where: { id: parseInt(id) }
    })

    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}
