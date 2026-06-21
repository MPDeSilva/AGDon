import { z } from 'zod'
import { serviceIds, businessTypeIds } from './content'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name').max(100),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().max(20).optional(),
  businessType: z.enum(businessTypeIds as [string, ...string[]], {
    errorMap: () => ({ message: 'Please select a business type' }),
  }),
  services: z
    .array(z.enum(serviceIds as [string, ...string[]]))
    .min(1, 'Please select at least one service'),
  turnover: z
    .enum(['under-30k', '30k-90k', '90k-250k', '250k-plus', 'prefer-not-to-say'])
    .optional(),
  contactMethod: z.enum(['email', 'phone', 'whatsapp'], {
    errorMap: () => ({ message: 'Please select a preferred contact method' }),
  }),
  preferredTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
  message: z.string().trim().max(2000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to be contacted' }),
  }),
  honeypot: z.string().max(0, 'Bot detected').optional(),
  turnstileToken: z.string().min(1, 'Please complete the security check'),
  locale: z.string().default('en-GB'),
  submittedAt: z.number().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>
