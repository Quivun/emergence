//import events model
const Events = require('../models/events');

//GET '/events'
const getAllEvents = (req, res, next) => {
    Events.find({}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//POST '/events'
const newEvents = (req, res) => {
    //check if the events _id already exists in db
    Events.findOne({ _id: req.body._id }, (err, data) => {
        //if events not in db, add it
        if (!data) {
            //create a new events object using the Events model and req.body
            //medicine name
            const newEvents = new Events({
                name: req.body.name,
                dosage: req.body.dosage,
                taken: req.body.taken,
                date: req.body.date
            })

            // save this object to database
            newEvents.save((err, data)=>{
                if(err){
                    console.log(data._id);
                    return res.json({Error: err});
                } 
                return res.json(data);
            })
        //if there's an error or the events is in db, return a message         
        }else{
            if(err){
                return res.json(`Error in newEvents POST ${err}`);
            }
            return res.json({message:"Events already exists"});
        }
    })    
};

//DELETE '/events'
const deleteAllEvents = (req, res, next) => {
    Events.deleteMany({}, (err)=> {
        if (err){
            return res.json({Error: err});
        }
        return res.json("Deleted all Events");
    })
};

//GET '/events/:_id'
const getOneEvents = (req, res, next) => {
    let _id = req.params._id;
    
    Events.findOne({_id:_id}, (err, data)=> {
        if (err || !data){
            return res.json({Error: err});
        }
        return res.json(data);
    })
};

//DELETE '/events/:_id'
const deleteOneEvents = (req, res, next) => {
    let _id = req.params._id; 

    Events.deleteOne({_id:_id}, (err,data)=> {
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
    getAllEvents, 
    newEvents,
    deleteAllEvents,
    getOneEvents,
    deleteOneEvents
};

