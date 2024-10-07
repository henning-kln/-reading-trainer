

self.setEventlistener('message', function(e) {
    var data = e.data;
    switch(data.cmd) {
        case 'generate':
            self.postMessage(generateWord(data.wordLength));
            break;
        case 'stop':
            self.postMessage('WORKER STOPPED');
            self.close(); // Terminates the worker.
            break;
        default:
            self.postMessage('Unknown command: ' + data.msg);
    }
}