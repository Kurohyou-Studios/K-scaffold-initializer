const fs = require('fs/promises');
const templates = require('./templates');

const templateDirectories = (obj,path) => {
  return Object.entries(obj)
    .reduce((memo,[key,value]) => {
      if(typeof value === 'object'){
        memo.push(fs.mkdir(
          `${path}/${key}`,{recursive:true}),
          ...templateDirectories(value,`${path}/${key}`)
        )
      }
      return memo;
    },[]);
};

const templateFiles = (obj,path,sheetName) => {
  return Object.entries(obj)
    .reduce((memo,[key,value]) => {
      if(typeof value === 'object'){
        memo.push(...templateFiles(value,`${path}/${key}`,sheetName))
      }else{
        const fileName = key.replace(/sheet-name/,sheetName);
        const fileContents = value.replace(/\{\{sheet-name\}\}/g,sheetName);
        memo.push(fs.writeFile(`${path}/${fileName}`,fileContents));
      }
      return memo;
    },[]);
};

const genDirectories = async (answers) => {
  const noSpaceSheetName = answers.sheetName.replace(/\s+/g,'_');
  const sheetJSON = {
    authors:answers.authorName.split(','),
    roll20userid:answers.roll20ID.split(','),
    preview:'preview.jpg',
    legacy:false,
  };
  const jsJSON = {
    "exclude":["node_modules","build"],
    "compilerOptions":{
      "module": "none",
    }
  };
  const packageJSON = {
    "name": noSpaceSheetName,
    "version": "0.0.0",
    "scripts": {
      "build": "k-build",
      "dev": "k-build --watch",
      "test": "vitest run",
      "test-watch": "vitest --watch"
    },
    "keywords": [],
    "author": answers.authorName,
    "license": "ISC",
    "devDependencies": {
      "@kurohyou/k-scaffold":"*",
      "@vitest/ui": "*",
      "vitest": "*"
    }
  };
  const configJSON = {
    source:'./source',
    destination:'./build',
    testDestination:'./__tests__',
    templates:'./source'
  };
  if(answers.compendiumName){
    sheetJSON.compendium = answers.compendiumName;
  }
  const relDirectory = `./${answers.directoryName}`.replace(/\/$/g,'');
  await Promise.all([
    // Live directory and files
    fs.mkdir(`${relDirectory}`,{recursive:true}),
    ...templateDirectories(templates,relDirectory)
  ]);
  templates.source['sheet.json'] = JSON.stringify(sheetJSON,null,2);
  templates.source['readme.md'] = `# ${answers.sheetName}`;

  templates['k.config.mjs'] = `export default ${JSON.stringify(configJSON,null,2)}`;
  templates['jsconfig.json'] = JSON.stringify(jsJSON,null,2);
  templates['package.json'] = JSON.stringify(packageJSON,null,2);
  await Promise.all(templateFiles(templates,relDirectory,noSpaceSheetName));
};

module.exports = genDirectories;