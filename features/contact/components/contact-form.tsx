'use client'

import React, { useActionState, useEffect, useState } from 'react'
import { Button } from '@/features/shared/ui/button'
import { submitContactForm, ContactFormState } from '@/features/contact/actions'
import { toast } from 'sonner'
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react'

const initialState: ContactFormState = {
  success: false,
  message: '',
  errors: {}
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Clear form on successful submission
  useEffect(() => {
    if (state.success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }
  }, [state.success])

  // Show toast notifications
  useEffect(() => {
    if (state.success && state.message) {
      toast.success(state.message)
    } else if (!state.success && state.message && !state.errors) {
      toast.error(state.message)
    }
  }, [state])

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-3">Send a Message</h3>
        <p className="text-muted-foreground">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        {/* Honeypot field - hidden from users but visible to bots */}
        <div style={{ display: 'none' }}>
          <label htmlFor="website">Website (leave empty)</label>
          <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
        </div>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              disabled={isPending}
              className={`block w-full pl-10 pr-3 py-3 border ${
                state.errors?.name ? 'border-destructive' : 'border-input'
              } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent`}
            />
          </div>
          {state.errors?.name && (
            <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              disabled={isPending}
              className={`block w-full pl-10 pr-3 py-3 border ${
                state.errors?.email ? 'border-destructive' : 'border-input'
              } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent`}
            />
          </div>
          {state.errors?.email && (
            <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number <span className="text-muted-foreground">(optional)</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 (555) 123-4567"
              disabled={isPending}
              className={`block w-full pl-10 pr-3 py-3 border ${
                state.errors?.phone ? 'border-destructive' : 'border-input'
              } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent`}
            />
          </div>
          {state.errors?.phone && (
            <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              disabled={isPending}
              className={`block w-full pl-10 pr-3 py-3 border ${
                state.errors?.subject ? 'border-destructive' : 'border-input'
              } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent`}
            />
          </div>
          {state.errors?.subject && (
            <p className="text-sm text-destructive mt-1">{state.errors.subject[0]}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="h-5 w-5 text-muted-foreground" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project or idea..."
              rows={4}
              disabled={isPending}
              className={`block w-full pl-10 pr-3 py-3 border ${
                state.errors?.message ? 'border-destructive' : 'border-input'
              } bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none`}
            />
          </div>
          {state.errors?.message && (
            <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full py-6 cursor-pointer"
        >
          {isPending ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
