#!/usr/bin/env node
const { execSync } = require('child_process');
const { query, generate, translate } = require('./lib');

const init = async ()=>{
  // execute project initialization
  const options = await query();
  if(options.action === 'project'){
    await generate(options);
    console.log('Now run:');
    if(options.directoryName){
      console.log(`cd ./${options.directoryName}`);
    }
    console.log('npm i');
  }else if(options.action === 'translate'){
    await translate(options);
    console.log('Translated files created, untranslated files saved as well.')
  }
};

init();