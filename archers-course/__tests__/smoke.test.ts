import { describe, expect, it } from 'vitest'

describe('Backend Vitest environment', () => {
    it('runs in Node without browser globals', () => {
        expect(typeof window).toBe('undefined')
        expect(process.versions.node).toBeDefined()
    })
})
