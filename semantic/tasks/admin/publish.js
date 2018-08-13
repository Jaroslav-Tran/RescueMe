/*******************************
          Release All
*******************************/

/*
 This task update all SUI individual component repos with new versions of containers

  * Commits changes from create containers to GitHub and Tags

*/

var
  runSequence = require('run-sequence')
;

/* Release All */
module.exports = function(callback) {

  runSequence(
    'update distributions', // commit less/css versions to github
    'update containers', // commit containers to github
    callback
  );

};