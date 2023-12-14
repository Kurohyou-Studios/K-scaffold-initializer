const { prompt } = require('inquirer');

const questions = [
  {
    type:'list',
    name:'action',
    message:'What do you want to do?',
    choices: [
      {
        name:'Setup K-scaffold Project',
        value:'project'
      },
      {
        name:'Add translation to existing sheet',
        value:'translate'
      }
    ]
  },
  {
    type: 'input',
    name: 'roll20ID',
    message: 'Your Roll20 ID (blank to ignore)',
    validate(answer){
      return /^[\d,]*$/.test(answer) ?
        true :
        'Roll20 IDs are numerical only. They can be found by going to your Roll20 profile page and grabbing the series of numbers immediately before your name in the url.'
    },
    when(answers){
      return answers.action === 'project'
    }
  },
  {
    type:'input',
    name:'authorName',
    message: 'Your name, user name, handle, etc',
    when(answers){
      return answers.action === 'project'
    }
  },
  {
    type: 'input',
    name: 'sheetName',
    message: 'Sheet name',
    when(answers){
      return answers.action === 'project'
    }
  },
  {
    type: 'input',
    name: 'directoryName',
    message: 'Directory name (blank to use current directory)',
    validate: (answer) => /\s+/.test(answer) ?
      'Directory names should not have spaces. snake_case is recommended' :
      true,
      when(answers){
        return answers.action === 'project'
      }
  },
  {
    type: 'input',
    name: 'compendiumName',
    message: 'Associated compendium (Blank for none)',
    when(answers){
      return answers.action === 'project'
    }
  },
  {
    type:'list',
    name:'architecture',
    message:'Initialize project for single file component use?',
    choices:[
      {
        name:'Yes',
        value:'sfc'
      },
      {
        name:'No',
        value:'standard'
      }
    ],
    when(answers){
      return answers.action === 'project'
    }
  }
];

const query = ()=>{
  return prompt(questions);
};

module.exports = query;