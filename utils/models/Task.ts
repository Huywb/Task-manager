import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    Date: { type: String },
    isCompleted: { type: Boolean, default: false },
    isImportant: { type: Boolean, default: false }
}, { timestamps: true });

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default Task;
