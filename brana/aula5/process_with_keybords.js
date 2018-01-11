var help = require('./help');
var keybord = require('./keyboard');

keybord.onReadable(function (option) {
switch (option[0]) {
  case 'a':
      console.log('pid:' + process.pid);
      break;
  case 'b':
      console.log('title:' + process.title);
      break;
  case 'c':
      console.log('arch:' + process.arch);
      break;
  case 'd':
      console.log('plataform:' + process.platform);
  break;
  case 'e':
    console.log(process.env);
    break;
  case 'm':
    console.log(process.memoryUsage());
    break;
  case 'u':
    console.log('uptime:' + process.uptime());
    break;
  case 'v':
    console.log(process.versions);
    break;
  case 'x' :
    process.exit(1);
  default:
    help.showOptions();
}

});

process.on('exit', function () {
  console.log('flw');
});


process.on('uncaughtException', function () {
    console.log('error');
});


a.b();
