
const EventEmitter = require('events');
const emitter = new (EventEmitter);

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', ['MyMessage', 2, 'Other message']);
    };

};

module.exports = Logger;