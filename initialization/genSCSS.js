const fs = require('fs/promises');
const path = require('path');
const hbs = require('handlebars');

const genSCSS = async (answers,{noSpaceSheetName,srcDirectoryPath,liveDirectoryPath}) =>{
  const [genSCSSTemplate,SCSSVarTemplate,masterSCSSTemplate,genIndexTemplate,sectionIndexTemplate,rollTemplate] =
    await Promise.all([
      fs.readFile(path.resolve(__dirname,'./templates/_general.scss'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_systemVariables.scss'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_master.scss'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_genindex.scss'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_sectionindex.scss'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_rolltemplate.scss'),'utf8')
        .then(t => hbs.compile(t))
    ]);
  await Promise.all([
    // General scss files
    fs.writeFile(`${srcDirectoryPath}/${noSpaceSheetName}.scss`,masterSCSSTemplate(answers)),
    fs.writeFile(`${srcDirectoryPath}/assets/scss/_generalsetup.scss`,genSCSSTemplate(answers)),
    fs.writeFile(`${srcDirectoryPath}/assets/scss/variables/_system.scss`,SCSSVarTemplate(answers)),
    fs.writeFile(`${srcDirectoryPath}/assets/scss/general/_index.scss`,genIndexTemplate(answers)),
    fs.writeFile(`${srcDirectoryPath}/assets/scss/sections/_index.scss`,sectionIndexTemplate(answers)),
    fs.writeFile(`${srcDirectoryPath}/assets/scss/_rolltemplate.scss`,rollTemplate(answers))
  ]);

};

module.exports = genSCSS;