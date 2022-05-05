const t = require('tap')
const { spawnSync } = require('child_process')
const binPath = '../bin/cli.js'

t.test('prints usage', t => {
  t.plan(1)
  spawnSync(binPath, ['-h'])
  t.same(minArgs('argv'), result)
})
