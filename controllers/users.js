//import users model
const Users = require('../models/users');

//GET '/users'
const getAllUsers = (req, res, next) => {
    Users.find({}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/users'
const newUsers = (req, res) => {
    //check if the users _id already exists in db
    Users.findOne({ email: req.body.email }, (err, data) => {
        //if users not in db, add it
        if (!data) {
            //create a new users object using the Users model and req.body
            const newUsers = new Users({
                email: req.body.email,
                password: req.body.password,
                user_type: req.body.user_type
            })

            // save this object to database
            newUsers.save((err, data)=>{
                if(err){
                    console.log(data._id);
                    return res.json({Error: err});
                } 
                return res.json(data);
            })
        //if there's an error or the users is in db, return a message         
        }else{
            if(err){
                return res.json(`Error in newUsers POST ${err}`);
            }
            return res.json({message:"Users already exists"});
        }
    })    
};

//DELETE '/users'
const deleteAllUsers = (req, res, next) => {
    Users.deleteMany({}, (err)=> {
        if (err){
            return res.json({Error: err});
        }
        return res.json("Deleted all Users");
    })
};

//GET '/users/:_id'
const getOneUsers = (req, res, next) => {
    let _id = req.params._id;
    
    Users.findOne({_id:_id}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//DELETE '/users/:_id'
const deleteOneUsers = (req, res, next) => {
    let _id = req.params._id; 

    Users.deleteOne({_id:_id}, (err,data)=> {
        if (data.deletedCount == 0){
            return res.json({message: "User doesn't exist."});
        } else if (err) {
            return res.json({Error: err});
        } else {
            return res.json({message: "User deleted."});
        }
    })
};

//export controller functions
module.exports = {
    getAllUsers, 
    newUsers,
    deleteAllUsers,
    getOneUsers,
    deleteOneUsers
};

