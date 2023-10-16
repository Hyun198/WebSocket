const Room = require('../schema/room');
const Chat = require('../schema/chat');

exports.removeRoom = async (roomId) => {
  try {
    await Room.deleteOne({ _id: roomId });
    await Chat.deleteMany({ room: roomId });
  } catch (error) {
    throw error;
  }
};