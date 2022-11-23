import {p, prevented, preventedAndStopped, ps, s, sp, stopped, stoppedAndPrevented} from '../src/main.js'


it('should pass', () => {
  expect(true).toBe(true)
})

it('should be a function', () => {
  expect(typeof prevented).toBe('function')
  expect(typeof p).toBe('function')
  expect(typeof stopped).toBe('function')
  expect(typeof s).toBe('function')
  expect(typeof preventedAndStopped).toBe('function')
  expect(typeof stoppedAndPrevented).toBe('function')
  expect(typeof sp).toBe('function')
  expect(typeof ps).toBe('function')
})

describe('prevented', () => {
  test('as wrapper', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget : undefined,
    }
    const handler = prevented(e => undefined)
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget : undefined,
    }
    const handler = prevented()
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget : undefined,
    }
    const handler = prevented
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
  })
})

describe('p', () => {
  test('as wrapper', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget : undefined,
    }
    const handler = p(e => undefined)
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget : undefined,
    }
    const handler = p()
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      preventDefault: jest.fn(),
      currentTarget : undefined,
    }
    const handler = p
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
  })
})

describe('stopped', () => {
  test('as wrapper', () => {
    const ev = {
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = stopped(e => undefined)
    handler(ev)
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = stopped()
    handler(ev)
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = stopped
    handler(ev)
    expect(ev.stopPropagation).toHaveBeenCalled()
  })
})

describe('s', () => {
  test('as wrapper', () => {
    const ev = {
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = s(e => undefined)
    handler(ev)
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = s()
    handler(ev)
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = s
    handler(ev)
    expect(ev.stopPropagation).toHaveBeenCalled()
  })
})

describe('preventedAndStopped', () => {
  test('as wrapper', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = preventedAndStopped(e => undefined)
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = preventedAndStopped()
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = preventedAndStopped
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })
})

describe('stoppedAndPrevented', () => {
  test('as wrapper', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = stoppedAndPrevented(e => undefined)
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = stoppedAndPrevented()
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = stoppedAndPrevented
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })
})

describe('sp', () => {
  test('as wrapper', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = sp(e => undefined)
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = sp()
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = sp
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })
})

describe('ps', () => {
  test('as wrapper', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = ps(e => undefined)
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as fn', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = ps()
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })

  test('as value', () => {
    const ev = {
      preventDefault : jest.fn(),
      stopPropagation: jest.fn(),
      currentTarget  : undefined,
    }
    const handler = ps
    handler(ev)
    expect(ev.preventDefault).toHaveBeenCalled()
    expect(ev.stopPropagation).toHaveBeenCalled()
  })
})
