const fs = require('fs/promises');

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
  const configJSON = {
    source:'./source',
    destination:'./build',
    testDestination:'./__tests__',
  };
  if(answers.compendiumName){
    sheetJSON.compendium = answers.compendiumName;
  }
  const relDirectory = `./${answers.directoryName}`.replace(/\/$/g,'');
  const liveDirectoryPath = `${relDirectory}/build`;
  const srcDirectoryPath = `${relDirectory}/source`;
  await Promise.all([
    // Live directory and files
    fs.mkdir(`${liveDirectoryPath}`,{recursive:true}),
    fs.mkdir(`${srcDirectoryPath}`,{recursive:true}),
    fs.mkdir(`${relDirectory}`,{recursive:true}),
  ]);
  await Promise.all([
    // Sheet json creation
    fs.writeFile(`${liveDirectoryPath}/sheet.json`,JSON.stringify(sheetJSON,null,2)),
    fs.writeFile(`${relDirectory}/k.config.mjs`,`export default ${JSON.stringify(configJSON,null,2)}`),
    fs.writeFile(`${relDirectory}/package.json`,JSON.stringify(packageJSON,null,2)),
  ]);
  return {noSpaceSheetName,liveDirectoryPath,srcDirectoryPath};
};

module.exports = genDirectories;