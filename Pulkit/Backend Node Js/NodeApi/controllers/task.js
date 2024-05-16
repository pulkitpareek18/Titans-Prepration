import {Task} from '../models/task.js';
import ErrorHandler from '../middlewares/error.js';

export const newTask = async (req, res, next) => {
   try{
    const { title, description } = req.body;
    await Task.create({
        title,
        description,
        user: req.user
    });

    res.status(201).json({
        success: true,
        message: "Task created successfully"
    });
   }
   catch(error){
        next(error);
   }
}

export const getMyTask = async (req, res, next) => {
    const userid = req.user._id;

    const tasks = await Task.find({user: userid});

    if (!tasks) return next(new ErrorHandler(404, "Task not found!"));

    res.status(200).json({
        success: true,
        tasks
    })
}


export const updateTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if(!task) return next(new ErrorHandler(404, "Task not found!"));

    task.isCompleted = !task.isCompleted;

    await task.save();

    try {
        await task.save();

        res.status(200).json({
            success: true,
            message: "Task Updated!"
        });
    } catch (error) {
        next(error);
    }

}


export const deleteTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if(!task){
        return next(new ErrorHandler(404, "Task not found!"));
    }

    try {
        await task.deleteOne();

        res.status(200).json({
            success: true,
            message: "Task Deleted!"
        });
    } catch (error) {
        next(error);
    }

    res.status(200).json({
        success: true,
        message: "Task Deleted!"
    })

}
