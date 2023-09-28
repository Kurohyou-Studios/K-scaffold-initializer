const requireText = require('require-text');

// scss templates
const componentSCSS = requireText('./components.scss',require);
const fontsSCSS = requireText('./fonts.scss',require);
const generalSCSS = requireText('./general.scss',require);
const rollTemplateSCSS = requireText('./rolltemplate.scss',require);
const scssSCSS = requireText('./sheet-name.scss',require);
const variableSCSS = requireText('./variables.scss',require);
const sectionsSCSS = requireText('./sections.scss',require);
const indexSCSS = requireText('./index.scss',require);

// pug templates
const javascriptPUG = requireText('./javascript.pug',require);
const mixinPUG = requireText('./mixins.pug',require);
const pugPUG = requireText('./sheet-name.pug',require);
const settingsPUG = requireText('./settings.pug',require);
const rollTemplatePUG = requireText('./rolltemplate.pug',require);

module.exports = {
  build:{},
  source:{
    articles:{'_settings.pug':settingsPUG},
    javascript:{'_index.pug':javascriptPUG},
    mixins:{'_index.pug':mixinPUG},
    rolltemplate:{
      '_index.pug':'include ./_rolltemplate.pug',
      '_rolltemplate.pug':rollTemplatePUG
    },
    scss:{
      components:{'_index.scss':componentSCSS},
      sections:{'_index.scss':sectionsSCSS},
      '_rolltemplate.scss':rollTemplateSCSS,
      '_fonts.scss':fontsSCSS,
      '_general.scss':generalSCSS,
      '_index.scss':indexSCSS,
      '_variables.scss':variableSCSS
    },
    'sheet-name.pug':pugPUG,
    'sheet-name.scss':scssSCSS,
    'translation.json':JSON.stringify({},null,2)
  }
};