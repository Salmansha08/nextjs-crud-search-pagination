'use server'

import { z } from 'zod'
import { prisma } from '@/libs/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const ContactSchema = z.object({
    name: z.string().min(4).max(50),
    phone: z.string().min(10).max(14),
})

export const saveContact = async (prevState: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.create({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone
            }
        })
        
    } catch (error) {
        return {
            message: "Failed to save contact data"
        }
    }

    revalidatePath('/contacts')
    redirect('/contacts')
}

export const editContact = async (id: string, prevState: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()))
    
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.update({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone
            },
            where: {
                id
            }
        })
        
    } catch (error) {
        return {
            message: "Failed to edit contact data"
        }
    }

    revalidatePath('/contacts')
    redirect('/contacts')
}

export const deleteContact = async (id: string) => {
    try {
        await prisma.contact.delete({
            where: {
                id
            }
        })
    } catch (error) {
        return {
            message: "Failed to delete contact data"
        }
    }

    revalidatePath('/contacts')
}