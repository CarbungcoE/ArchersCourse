import { createBrowserClient } from '@supabase/ssr'
import { isPagesBuild } from '@/utils/deployment'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !publishableKey) return null

  return createBrowserClient(
    url,
    publishableKey,
    isPagesBuild ? { auth: { detectSessionInUrl: false } } : undefined
  )
}
