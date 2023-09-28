#!/usr/bin/env node
const { execSync } = require('child_process');
const { query, generate } = require('./lib');

const init = async ()=>{
  // execute project initialization
  const options = await query();
  await generate(options);
  console.log('Now run:');
  if(options.directoryName){
    console.log(`cd ./${options.directoryName}`);
  }
  console.log('npm i');
};

init();