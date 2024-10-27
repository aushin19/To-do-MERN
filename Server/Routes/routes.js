import express, { response } from 'express'
import todo from '../Models/dataSchema.js'

const route = express.Router();

route.post('/api/add', async (req, res)=>{
    try{
        const newTodo = await todo.create({
            taskName: req.body.data,
            isChecked: false
        })
    
        await newTodo.save();
        return res.status(200).json(newTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
    
})

route.get('/api/get', async (req, res)=>{
    try{
        const allTodos = await todo.find({}).sort({'_id': -1});
        return res.status(200).json(allTodos);
    }catch(error){
        return res.status(500).json(error.message);
    }
    
})

route.patch('/api/patch', async (req, res)=>{
    try{
        const toggleTodo = await todo.updateOne(
            { _id: req.body.taskId },
            { $set: { isChecked: req.body.isChecked } }
        )
        return res.status(200).json(toggleTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
})

route.delete('/api/delete/:id', async (req, res)=>{
    try{
        const deleteTodo = await todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(deleteTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
})

export default route;


