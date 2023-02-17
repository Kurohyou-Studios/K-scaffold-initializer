const { prompt } = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'roll20ID',
    message: 'Your Roll20 ID (blank to ignore)',
    validate(answer){
      return /^[\d,]*$/.test(answer) ?
        true :
        'Roll20 IDs are numerical only. They can be found by going to your Roll20 profile page and grabbing the series of numbers immediately before your name in the url.'
    }
  },
  {
    type:'input',
    name:'authorName',
    message: 'Your name, user name, handle, etc'
  },
  {
    type: 'input',
    name: 'sheetName',
    message: 'Sheet name'
  },
  {
    type: 'input',
    name: 'directoryName',
    message: 'Directory name (blank to use current directory)',
    validate: (answer) => /\s+/.test(answer) ?
      'Directory names should not have spaces. snake_case is recommended' :
      true
  },
  {
    type: 'input',
    name: 'compendiumName',
    message: 'Associated compendium (Blank for none)'
  },
  {
    type:'list',
    name:'npm',
    message: 'Auto install npm dependencies?',
    choices:[
      {name:'Yes',value:true},
      {name:'No',value:false}
    ]
  }
];

const query = ()=>{
  return prompt(questions);
};

module.exports = query;