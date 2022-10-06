#!/usr/bin/env node
const { execSync } = require('child_process');
const { query, generate } = require('./lib');

const init = async ()=>{
  // execute project initialization
  const options = await query();
  await generate(options);
  if(options.npm){
    console.log('====== Installing K-Scaffold Dependencies ======');
    execSync('npm i',{stdio:[0,1,2]});
    console.log('====== K-Scaffold Dependencies Installed ======');
    console.log('Run `npm start` to build your sheet as changes are made');
    console.log('Run `npm test` to begin test driven development');
  }
};

init();