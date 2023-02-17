const query = require('./query');
const genDirectories = require('./genDirectories');

const generate = async (answers)=>{
  const paths = await genDirectories(answers);
};

module.exports = { query, generate }