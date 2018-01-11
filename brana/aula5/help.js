var options = [
  'a) pid',
  'b) title',
  'c) arch',
  'd) platform',
  'e) env',
  'm) memory usege',
  'u) uptime',
  'v) versions',
  'x) quit'
];

exports.showOptions = function () {
   options.forEach(function (options) {
     console.log(options);
   });
}
