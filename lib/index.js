const query = require('./query');
const genDirectories = require('./genDirectories');
const translate = require('./translate');

const generate = (answers)=>{
  return genDirectories(answers);
};

module.exports = { query, generate, translate }