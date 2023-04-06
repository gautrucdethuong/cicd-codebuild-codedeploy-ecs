import express from 'express'
import os from 'os'

const app = express();

app.get('/', (req, res) => {
    const clientIp = req.header('x-forwarded-for');
    const albIp = req.socket.remoteAddress;
    const containerIp = req.socket.localAddress;
    const containerName = os.hostname();
    console.log('Hello Amazon ECS from Minhhn');
    res.json({
        serviceName: 'Minhhn ECS demo 333',
        contact: 'study-aws@gmail.com',
        clientIp: clientIp,
        albIp: albIp,
        containerIp: containerIp,
        containerName: containerName,
    });
});

app.listen(8080, ()=>{
    console.log('App start success!!!')
});


