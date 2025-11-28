import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export function ContactInfoCard() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'daniel.c.daniel.dev@gmail.com',
      href: 'mailto:daniel.c.daniel.dev@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+234 813 933 1585',
      href: 'tel:+234 813 933 1585 '
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Nigeria',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/SoftLifeX'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/daniel-c-daniel-dev'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      href: 'https://x.com/SoftLifeX'
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-3">Contact Information</h3>
        <p className="text-muted-foreground">
          Reach out through any of these channels. I'm always happy to connect.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="space-y-4 mb-8">
        {contactInfo.map((item, index) => (
          <div key={index} className="bg-card-2 rounded-[var(--radius)] border border-border p-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-background border border-input">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                {item.href ? (
                  <a 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h4 className="text-xl font-bold text-foreground mb-4">Feeling Social?</h4>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-md bg-card-2 border border-border hover:bg-card hover:border-primary/50 transition-all duration-300 hover:ring-2 hover:ring-primary/20"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
