import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
    cleanup();
})

// import { afterEach, expect } from 'vitest'
// import { cleanup } from '@testing-library/react'
// import matchers from '@testing-library/jest-dom/matchers'

// // Extend Vitest with jest-dom matchers
// expect.extend(matchers)

// afterEach(() => {
//   cleanup()
// })

