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
        memo.push(...templateDirectories(value,`${path}/${key}`,sheetName))
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
    "author": "",
    "license": "ISC",
    "jest": {
      "reporters": [
        "default",
        [
          "jest-summary-reporter",
          {
            "failuresOnly": false
          }
        ]
      ]
    },
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
  const liveDirectoryPath = `${relDirectory}/build`;
  const srcDirectoryPath = `${relDirectory}/source`;
  const generatorTemplate = await fs.readFile(path.resolve(__dirname,'./templates/generate.js'),'utf8')
    .then(t => hbs.compile(t));
  await Promise.all([
    // Live directory and files
    fs.mkdir(`${relDirectory}`,{recursive:true}),
    fs.mkdir(`${liveDirectoryPath}`,{recursive:true}),
    fs.mkdir(`${srcDirectoryPath}`,{recursive:true}),
    ...templateDirectories(templates,srcDirectoryPath)
  ]);
  await Promise.all([
    // Template template creation
    fs.writeFile(`${srcDirectoryPath}/sheet.json`,JSON.stringify(sheetJSON,null,2)),
    fs.writeFile(`${srcDirectoryPath}/translation.json`,JSON.stringify({},null,2)),
    fs.writeFile(`${srcDirectoryPath}/readme.md`,`# ${answers.sheetName}`),

    // k config creation
    fs.writeFile(`${relDirectory}/k.config.mjs`,`export default ${JSON.stringify(configJSON,null,2)}`),
    // jsconfig setup for vscode autocomplete
    fs.writeFile(`${relDirectory}/jsconfig.json`,`${JSON.stringify(jsJSON,null,2)}`),
    // package.json creation
    fs.writeFile(`${relDirectory}/package.json`,JSON.stringify(packageJSON,null,2)),

    // Initial file setup
    ...templateFiles(templates,srcDirectoryPath,noSpaceSheetName)
  ]);
  return {noSpaceSheetName,liveDirectoryPath,srcDirectoryPath};
};

module.exports = genDirectories;