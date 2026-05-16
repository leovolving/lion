import { describe, expect, test } from 'vitest'

import { cn } from './classnames'

describe('classnames (cn)', () => {
  test.for([
    [[1, 2], '1 2'],
    [[undefined, 'foo'], 'foo'],
    [['foo', 'bar'], 'foo bar'],
    [[false, null], ''],
    [[1, false, 2, 'zip', undefined, null, 'zap'], '1 2 zip zap'],
  ])('returns %s', ([a, expected]) => {
    expect(cn(...a)).toBe(expected)
  })
})
