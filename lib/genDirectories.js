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
    "version": "0.0.0",
    "scripts": {
      "build": "k-build",
      "start": "k-build --watch",
      "test": "vitest run",
      "test-watch": "vitest --watch"
    },
    "keywords": [],
    "author": answers.authorName,
    "license": "ISC",
    "devDependencies": {
      "@kurohyou/k-scaffold":"^1.1.0",
      "@vitest/ui": "^0.26.2",
      "vitest": "^0.26.3"
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