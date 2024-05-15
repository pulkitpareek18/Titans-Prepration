import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {

    const users = await User.find({});
    console.log(req.query);

    const keyword = req.query.keyword;
    console.log(keyword)

    res.json({
        success: true,
        users
    });
};

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password
    })

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered Successfully"
    });

};

export const specialFunc = async (req, res) => {

    res.json({
        success: "true",
        user: "Just Joking"
    })
};

export const getUserDetails = async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    console.log(req.params)

    res.json({
        success: "true",
        user: user
    })
};

export const updateUser = async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    console.log(req.params)

    res.json({
        success: "true",
        message: "Updated"
    })
};

export const deleteUser = async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    // user.remove();

    console.log(req.params)

    res.json({
        success: "true",
        message: "Deleted"
    })
};