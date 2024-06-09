const { User: User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: "7d",
    });
}

const userController = {
    signLogin: async(req, res) => {
        const {email, password} = req.body;
        const id =  req.params.id;
        const user = await User.findOne({email})

        //check if user exists
        if(!user){
            res.status(404).json({errors: ["User not found!"]});
            return;
        }

        //check if password matches
        if(!(await bcrypt.compare(password, user.password))){
            res.status(422).json({errors: ["Password don't matches!"]});
            return;
        }

        //Return useer with token
        res.status(201).json({
            email: email,
            token: generateToken(id),
            msg: "The login is done!"
        });
    },
    
    getAllLogin: async(req, res) => {
        try {
            const login = await User.find();
            res.json(login); 

        } catch (error) {
            console.log(error);
        }
    },   
    
    getLogin: async(req, res) => {
        try {
            //id => req != GET
            //id => req === POST
            //id => URL === GET

            const {id} =  req.params;
            const login = await User.findById(new mongoose.Types.ObjectId({id})).select("-password");
            if(!login){
                res.status(204).json({msg: "User not found!"});
                return;
            }

            res.status(200).json(login);  

        } catch (error) {
            console.log(error);
        }
    },

    updateLogin: async (req, res) => {
        const {name, email, password} = req.body;
        const id =  req.params.id;
        const user = await User.findById(id).select("-password");

        if(name){
            user.name = name;
        }
        
        if(email){
            user.email = email;
        }
        
        if(password){
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);  
            user.password = passwordHash;
        }

        const updateUser =  await User.findByIdAndUpdate(id, user);

        if(!updateUser){
            res.status(204).json({msg: "User not found!"});
            return;
        }

        res.status(200).json({
            id: id,
            token: generateToken(id),
            msg: "The user has been updated!"});
    },

    getCurrentUser: async (req, res) => {
        const user = req.user;

        res.status(200).json({
            user,
            msg:"Acessado"
        });
    }
};

module.exports =  userController;