import {generateConfig} from '@whitetrefoil/eslint-config'


export default await generateConfig({
  type: 'plain',
  ts  : {
    rootDir: import.meta.dirname,
  },
})
