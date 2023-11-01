const { User: User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {
        expiresIn: "7d",
    });
}

const userController = {
    signLogin: async(req, res) => {
        res.send("Login");
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

            const id =  req.params.id;
            const login = await User.findById(id);

            if(!login){
                res.status(204).json({msg: "User not found!"});
                return;
            }

            res.json(login);  

        } catch (error) {
            console.log(error);
        }
    },

    updateLogin: async (req, res) => {
        const {name, email, password, confirmpassword} = req.body;
        const id =  req.params.id;
        const user = await User.findById(id).select("-password, -confirmpassword");

        if(name){
            const salt = await bcrypt.genSalt();
            const nameHash = await bcrypt.hash(name, salt); 
            user.name = nameHash;
        }
        
        if(email){
            const salt = await bcrypt.genSalt();
            const emailHash = await bcrypt.hash(email, salt); 
            user.email = emailHash;
        }
        
        if(password){
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt);  
            user.password = passwordHash;
        }

        if(confirmpassword){
            user.confirmpassword = user.password;
        }

        const updateUser =  await User.findByIdAndUpdate(id, user);

        if(!updateUser){
            res.status(204).json({msg: "Project not found!"});
            return;
        }

        res.status(200).json({
            id: id,
            token: generateToken(id),
            msg: "The project has been updated!"});
    }
};

module.exports =  userController;