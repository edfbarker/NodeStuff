
// console.log(module);

const fs = require('fs');

function processDirList(err, files) {
    if (err)
        console.log('Error:', err);
    else   
        console.log('File List is ', files)

}

var dir = '/';
// const files = fs.readdir(dir, processDirList);

// console.log(files);

const Logger = require('./logger');
const logger = new Logger();


function handleLogEvent(eventArg) {
    console.log(`Handling logging event ${eventArg}`);
}
logger.on('messageLogged', handleLogEvent);

logger.log('Original Logging Message');

console.log('Exiting');

