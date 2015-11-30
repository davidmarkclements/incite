var prompt = require('prompt-sync')

module.exports = incite

function incite(question) {

  //remove when https://github.com/0xxff/prompt-sync/pull/6 lands
  var wasRaw = process.stdin.isRaw

  //change value to ask when https://github.com/0xxff/prompt-sync/pull/7 lands
  var ans = prompt.prompt({value: question, echo: ''})

  //remove when https://github.com/0xxff/prompt-sync/pull/6 lands
  process.stdin.setRawMode(wasRaw)

  //remove when https://github.com/0xxff/prompt-sync/pull/5 lands
  if (ans === null) { process.exit(130) }

  //remove replace when https://github.com/0xxff/prompt-sync/pull/7 lands
  return ans.replace(question, '')

}

incite.prompt = prompt.prompt
incite.save = prompt.save
incite.init = prompt.init