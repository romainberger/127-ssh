var fs    = require('fs')
  , spawn = require('child_process').spawn

module.exports = function(command) {
  var homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE

  fs.readFile(homePath+'/.ssh/config', 'utf8', function(err, data) {
    if (err) process.exit()

    var pattern  = new RegExp("Host "+command+"\n", "g")
      , sshExist = data.match(pattern)

    if (sshExist) {
      console.log('Command not found: '+command)
      console.log('SSH Host "'+command+'" found')
      spawn('ssh', [command], {stdio: 'inherit'})
    }
  })
}
