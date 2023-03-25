import express from 'express'

const app = express();

app.get('/', (rew, res) => {
    console.log('Hello world!');
    res.json('Hello world!!!');
});

app.listen(8080, ()=>{
    console.log('App start success!!!')
});


