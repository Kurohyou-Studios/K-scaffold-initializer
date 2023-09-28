const query = require('./query');
const genDirectories = require('./genDirectories');

const generate = (answers)=>{
  return genDirectories(answers);
};

module.exports = { query, generate }