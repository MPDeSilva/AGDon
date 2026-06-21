let rateLimitModule: typeof import('@upstash/ratelimit') | null = null

async function getRateLimiter() {
  if (!process.env.UPSTASH_REDIS_REST_URL) return null
  if (!rateLimitModule) {
    rateLimitModule = await import('@upstash/ratelimit')
  }
  const { Ratelimit } = rateLimitModule
  const { Redis } = await import('@upstash/redis')
  return new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    analytics: false,
  })
}

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean }> {
  const limiter = await getRateLimiter()
  if (!limiter) return { allowed: true }
  const { success } = await limiter.limit(ip)
  return { allowed: success }
}
