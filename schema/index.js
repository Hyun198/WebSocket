const mongoose = require('mongoose');

const { MONGO_ID, MONGO_PASSWORD, NODE_ENV } = process.env;
const MONGO_URL = `mongodb+srv://${MONGO_ID}:${MONGO_PASSWORD}@cluster0.ozaak0l.mongodb.net/?retryWrites=true&w=majority`;

const connect = () => {
    if (NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    mongoose.connect(MONGO_URL, {
        dbName: 'gifchat',
        userNewUrlParser: true,

    }).then(() => {
        console.log('몽고디비 연결 성공');
    }).catch((error) => {
        console.error('연결실패', error);
    });
};

mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.');
    connect();
});

module.exports = connect;