import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    taskName: String,
    isChecked: Boolean
});

const todo = mongoose.model('todoSchema', dataSchema);

export default todo;