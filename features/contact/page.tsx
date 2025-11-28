"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ContactForm } from './components/contact-form'
import { ContactInfoCard } from './components/contact-info-card'
import { Toaster } from 'sonner'

export default function ContactPage() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Badge animation - fade in + slide down
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4 }
      )

      // Title animation - fade in + slide up
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      )

      // Description animation - fade in + slide up
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.3 },
        "-=0.3"
      )

      // Form and Info animations - parallel fade in + slide
      tl.fromTo(
        formRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.1"
      )

      tl.fromTo(
        infoRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.5"
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto min-h-[calc(100svh-112px)]">
          {/* Header */}
          <div className="text-center mb-16">
            <div 
              ref={badgeRef}
              className="inline-flex items-center px-3 py-1 rounded-full bg-card-2 border border-border mb-6 opacity-0"
            >
              <span className="text-sm text-muted-foreground">Get in touch</span>
            </div>
            <h1 
              ref={titleRef}
              className="text-5xl font-bold text-foreground mb-6 opacity-0"
            >
              Let's Create Something{' '}
              <span className="animate-amazing">Amazing</span>
            </h1>
            <p 
              ref={descriptionRef}
              className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0"
            >
              Have a project in mind? I'd love to hear about it. Reach out and let's discuss how we can work together.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef} className="opacity-0">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="opacity-0">
              <ContactInfoCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
