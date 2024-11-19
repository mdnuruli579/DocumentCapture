import mongoose from "mongoose";
const documentSchema=new mongoose.Schema({
    name: String,
    documentNumber: String,
    dateOfBirth: String,
    issueDate: String,
    expirationDate: String,
    address: String,
});
export const Document=mongoose.model('Document',documentSchema);