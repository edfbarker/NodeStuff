
// this is being added for feature 2 branch.
// console.log(module);

const fs = require('fs');   // this line is being changed for feature 2 branch

function processDirList(err, files) {
    if (err)
        console.log('Error:', err);
    else   
        console.log('File List is ', files)

}

var dir = '/';
// const files = fs.readdir(dir, processDirList);

// console.log(files);

const Logger = require('./logger');  // This is a conflicting comment for Feature-4
const logger = new Logger();


function handleLogEvent(eventArg) {
    console.log(`Handling logging event ${eventArg}`);
}
logger.on('messageLogged', handleLogEvent);

logger.log('Original Logging Message');


// above line logging cons was removed as part of feature2 branch
