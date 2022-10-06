const query = require('./query');
const genDirectories = require('./genDirectories');
const genPug = require('./genPug');
const genSCSS = require('./genSCSS');

const generate = async (answers)=>{
  const paths = await genDirectories(answers);
  return Promise.all([genPug(answers,paths),genSCSS(answers,paths)]);
};

module.exports = { query, generate }