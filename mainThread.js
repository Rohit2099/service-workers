const { Worker, isMainThread, workerData, parentPort } = require("worker_threads");

if (isMainThread) {
    let workerPr = new Promise((res, rej) => {
        const worker = new Worker("./worker.js");
        worker.on("message", res);
    });
    console.log("in between");

    workerPr.then((data) => {
        console.log(data);
    });

    let parentRes = 0;
    // takes 10 seconds
    for (let i = 0; i < 1e10; i++) {
        parentRes += 1;
    }
    console.log(parentRes);
}
