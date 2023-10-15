const mongoose = require('mongoose');

const { Schema } = mongoose;
const roomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    max: {
        type: Number,
        required: true,
        default: 10,
        min: 2,
    }
    , owner: {
        type: String,
        required: true,
    }
    , password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Room', roomSchema);

//방 제목, 최대 수용인원, 방장, 비밀번호(필수 아님), 생성시간 , 기본 10명 최소 2명 이상