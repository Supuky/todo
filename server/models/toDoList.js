import mongoose from 'mongoose';

// db内設定
const listSchema = mongoose.Schema({
    list: String,
    createdAt: {
        type: Date,
        default: Date.now
    } 
});

const ToDoList = mongoose.model('ToDoLists', listSchema);

export default ToDoList;