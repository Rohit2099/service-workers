const { parentPort } = require("worker_threads");

let result = 0;

for (let i = 0; i < 1e10; i++) {
    result += 1;
}

parentPort.postMessage(result);
