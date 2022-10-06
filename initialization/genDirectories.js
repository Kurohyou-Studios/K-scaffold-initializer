const fs = require('fs/promises');
const path = require('path');
const hbs = require('handlebars');

const genDirectories = async (answers) => {
  const noSpaceSheetName = answers.sheetName.replace(/\s+/g,'_');
  const sheetJSON = {
    authors:answers.authorName.split(','),
    roll20userid:answers.roll20ID.split(','),
    preview:'preview.jpg',
    instructions:'Write your instructions here',
    legacy:false,
    html:`${noSpaceSheetName}.html`,
    css:`${noSpaceSheetName}.css`
  };
  const packageJSON = {
    "name": "basic",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "nodemon generator.js",
      "test": "jest --watch"
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
      "@kurohyou/k-scaffold":"^0.1.0",
      "jest": "^29.1.2",
      "nodemon": "^2.0.19",
      "jest-summary-reporter": "^0.0.2"
    }
  };
  const nodemonJSON = {
    "ext":"pug, js, scss,json",
    "ignore":["**/testFramework.js","*.html","**/translation.json"],
    "verbose":true
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
    fs.mkdir(`${liveDirectoryPath}/assets/images`,{recursive:true}),

    // Pug directories and files
    fs.mkdir(`${srcDirectoryPath}/assets/pug/articles`,{recursive:true}),
    fs.mkdir(`${srcDirectoryPath}/assets/pug/mixins`,{recursive:true}),
    fs.mkdir(`${srcDirectoryPath}/assets/pug/rolltemplates`,{recursive:true}),
    fs.mkdir(`${srcDirectoryPath}/assets/pug/spines`,{recursive:true}),

    // JS Files
    fs.mkdir(`${srcDirectoryPath}/assets/js/__tests__`,{recursive:true}),

    // SCSS directories and files
    fs.mkdir(`${srcDirectoryPath}/assets/scss/sections`,{recursive:true}),
    fs.mkdir(`${srcDirectoryPath}/assets/scss/general`,{recursive:true}),
    fs.mkdir(`${srcDirectoryPath}/assets/scss/variables`,{recursive:true}),
  ]);
  await Promise.all([
    // Sheet json creation
    fs.writeFile(`${liveDirectoryPath}/sheet.json`,JSON.stringify(sheetJSON,null,2)),
    fs.writeFile(`${relDirectory}/nodemon.json`,JSON.stringify(nodemonJSON,null,2)),
    fs.writeFile(`${relDirectory}/package.json`,JSON.stringify(packageJSON,null,2)),
    fs.writeFile(`${relDirectory}/generator.js`,generatorTemplate(answers))
  ]);
  return {noSpaceSheetName,liveDirectoryPath,srcDirectoryPath};
};

module.exports = genDirectories;