const requireText = require('require-text');

module.exports = {
  build:{},
  source:{
    components:{
      '_index.pug':requireText('./components.pug',require)
    },
    sections:{
      '_index.pug':requireText('./sections.pug',require)
    },
    views:{
      '_index.pug':requireText('./views.pug',require)
    },
    scss:{
      '_variables.scss':requireText('./variables.scss',require),
      '_index.scss':requireText('./scss.scss',require)
    },
    javascript:{
      '_index.pug':requireText('./javascript.pug',require)
    },
    rolltemplate:{
      '_index.pug':requireText('./rolltemplate.pug',require)
    },
    'sheet-name.pug':requireText('./sheet-name.pug',require),
    'sheet-name.scss':requireText('./sheet-name.scss',require),
    '_rolltemplate.scss':requireText('./rolltemplate.scss',require),
    'translation.json':JSON.stringify({},null,2)
  }
};