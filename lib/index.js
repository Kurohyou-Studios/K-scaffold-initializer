const query = require('./query');
const genDirectories = require('./genDirectories');
const genPug = require('./genPug');
const genSCSS = require('./genSCSS');

const generate = async (answers)=>{
  const paths = await genDirectories(answers);
  return paths;
};

module.exports = { query, generate }