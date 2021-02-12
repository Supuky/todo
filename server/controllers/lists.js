import ToDoList from '../models/toDoList.js';
import mongoose from 'mongoose';

export const getLists = async (req, res) => {
    try {
        // db内のlistを探す
        const ToDoLists = await ToDoList.find();

        console.log(ToDoLists);

        // json型を普通にして返す
        res.status(200).json(ToDoLists);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createList = async (req, res) => {
    // dbに送るデータ
    const list = req.body;

    // dbに追加
    const newList = new ToDoList(list);

    try {
        // dbに保存
        await newList.save();

        // json型を普通にして返す
        res.status(201).json(newList);

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateList = async (req, res) => {
    // ex. /lists/:id -> /lists/123
    const { id } = req.params;
    // 入力した値
    const { list } = req.body;

    // mogooseないに_idが存在しない場合
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('リストが見つかりませんでした。');
    
    // update
    const updatedList = { list, _id: id };
    await ToDoList.findByIdAndUpdate(id, updatedList, { new: true });

    //json型を普通にして返す
    res.json(updatedList);
}

export const deleteList = async (req, res) => {
    // ex. /lists/:id -> /lists/123
    const { id } = req.params;

    // valid
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('リストが見つかりませんでした。');

    await ToDoList.findByIdAndDelete(id);

    console.log("delete")

    res.json({ message: 'リストを消去しました。' })
}