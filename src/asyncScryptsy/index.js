import scryptsyWorker from 'worker-loader!babel-loader!./scryptsy.worker.js';
//     pwdBuff, salt, +scryptParams.n, +scryptParams.r, +scryptParams.p, +scryptParams.keylen
export default function asyncScryptsy(...args) {
    const w = new scryptsyWorker();
    w.postMessage({
        cmd: 'scryptsy',
        id: 'any',
        args
    });
    const timeout = 30000;
    const p=new Promise((res, rej) => {
        const timer = setTimeout(() => {
            rej('time out');
        }, timeout);
        w.addEventListener('message', (event) => {
            clearTimeout(timer);
            const data = event.data;
            res(data.result);
        });
        w.addEventListener('error', function (e) {
            clearTimeout(timer);
            console.log([
                'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
            ].join(''));
            rej(`exec error:${e.message}`);
        });
    });
    p.workerInstance=w;
    p.finally(()=>{
        w.close();
    });
    return p;
}