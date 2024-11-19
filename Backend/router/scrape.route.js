import express from 'express';
import { showData, uploadFile } from '../controller/file.js';
import upload from '../middleware/mutler.js';
const router=express.Router();
router.post('/upload', upload.single('file'), uploadFile);
router.route("/show").get(showData);
export default router;

