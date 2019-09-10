const { fork } = require('child_process');
const fs       = require('fs');


const onError = (e) => {
  console.error(e);
  process.exit(-1);
};


fork('node_modules/.bin/tsc', ['-p', 'tsconfig.build.json'])
  .on('close', () => {
    fs.renameSync('preact.js', 'main.module.js');
    fs.renameSync('preact.js.map', 'main.module.js.map');

    fork('node_modules/.bin/tsc', ['-p', 'tsconfig.build-common.json'])
      .on('close', () => {
        fs.renameSync('preact.js', 'main.js');
        fs.renameSync('preact.js.map', 'main.js.map');
      })
      .on('error', onError)
    ;
  })
  .on('error', onError)
;
