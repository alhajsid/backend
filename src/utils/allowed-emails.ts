import { env } from '../config/env.js'

const allowedEmails = new Set(
  env.ALLOWED_EMAILS.split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
)

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function isAllowedEmail(email: string) {
  return allowedEmails.has(normalizeEmail(email))
}
