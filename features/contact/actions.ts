'use server'

import { contactFormSchema } from '@/lib/validation/contact-schema'
import { checkRateLimit } from '@/lib/security/rate-limiter'
import { isSpam, isHoneypotFilled } from '@/lib/security/spam-detector'
import { sendContactEmail } from '@/lib/email/email-service'
import { extractClientIP } from '@/lib/utils/ip-extractor'

export interface ContactFormState {
  success?: boolean
  message?: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    subject?: string[]
    message?: string[]
  }
}


export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract form data
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string
  const website = formData.get('website') as string // Honeypot field

  // Security checks
  if (isHoneypotFilled(website)) {
    return {
      success: false,
      message: 'Spam detected. Please contact me directly.'
    }
  }

  const headers = new Headers()
  const ip = extractClientIP(headers)

  if (!checkRateLimit(ip)) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.'
    }
  }

  const fullContent = `${name} ${email} ${subject} ${message}`.toLowerCase()
  if (isSpam(fullContent)) {
    return {
      success: false,
      message: 'Message appears to be spam. Please contact me directly.'
    }
  }

  // Validation
  const result = contactFormSchema.safeParse({
    name,
    email,
    phone,
    subject,
    message
  })

  if (!result.success) {
    const errors: ContactFormState['errors'] = {}
    
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof ContactFormState['errors']
      if (field) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (errors as any)[field] = [issue.message]
      }
    })

    return {
      success: false,
      message: 'Please fix the errors below',
      errors
    }
  }

  // Send email
  try {
    await sendContactEmail(result.data)
    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again later.'
    }
  }
}
