const fs = require('fs/promises');
const path = require('path');
const i18n = require('i18nreplacer');

const translate = async (answers) => {
  const dir = await fs.readdir(path.resolve('./'),{encoding:'utf8',withFileTypes:true})
  await Promise.all(dir.map(async ent => {
    if(!ent.name.endsWith('.html')) return;
    const html = await fs.readFile(path.resolve(`./${ent.name}`),'utf8');
    const translated = i18n.apply18n(html);
    const translation = i18n.translate(translated);
    await Promise.all([
      fs.writeFile(path.resolve(`./${ent.name}`),translated),
      fs.writeFile(path.resolve(`./untranslated-${ent.name}`),html),
      fs.writeFile(path.resolve('./translation.json'),JSON.stringify(translation,null,2))
    ]);
  }));
};

module.exports = translate;