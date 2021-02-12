import express from 'express';

import { getLists, createList, updateList, deleteList } from '../controllers/lists.js';

const router = express.Router();

// db上にあるtodolistを取得
router.get('/', getLists);
// todolistをdbに保存
router.post('/', createList);
// todolistを編集
router.patch('/:id', updateList);
// todolistを消去
router.delete('/:id', deleteList);

export default router;