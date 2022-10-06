const fs = require('fs/promises');
const path = require('path');
const hbs = require('handlebars');

const genPug = async (answers,{noSpaceSheetName,srcDirectoryPath,liveDirectoryPath}) =>{
  const [masterTemplate,mixinTemplate,spineTemplate,articleIndexTemplate,scriptIndexTemplate,rollTemplate] =
    await Promise.all([
      fs.readFile(path.resolve(__dirname,'./templates/_master.pug'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_mixin.pug'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_spine.pug'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_articleIndex.pug'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_scriptIndex.pug'),'utf8')
        .then(t => hbs.compile(t)),
      fs.readFile(path.resolve(__dirname,'./templates/_rolltemplate.pug'),'utf8')
        .then(t => hbs.compile(t))
    ]);
    await Promise.all([
      // General scss files
      fs.writeFile(`${srcDirectoryPath}/${noSpaceSheetName}.pug`,masterTemplate(answers)),
      fs.writeFile(`${srcDirectoryPath}/assets/pug/mixins/_index.pug`,mixinTemplate(answers)),
      fs.writeFile(`${srcDirectoryPath}/assets/pug/spines/_index.pug`,spineTemplate(answers)),
      fs.writeFile(`${srcDirectoryPath}/assets/pug/articles/_index.pug`,articleIndexTemplate(answers)),
      fs.writeFile(`${srcDirectoryPath}/assets/js/_index.pug`,scriptIndexTemplate(answers)),
      fs.writeFile(`${srcDirectoryPath}/assets/pug/rolltemplates/_rolltemplate.pug`,rollTemplate(answers))
    ]);
};

module.exports = genPug;