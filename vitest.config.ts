import {defineConfig} from 'vitest/config'


export default defineConfig({
  root: 'src',

  test: {
    root: '.',

    reporters: ['verbose'],

    restoreMocks: true,

    coverage: {
      enabled         : true,
      include         : ['src/**'],
      reportsDirectory: 'test_results/vitest',
      reporter        : [['text'], ['html-spa']],
    },

    typecheck: {
      enabled: true,
    },
  },
})
