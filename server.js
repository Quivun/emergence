require('dotenv').config();

const mongoose = require('mongoose');
const express = require ('express');
const diseaseRoutes = require('./routes/disease'); // import the routes
const treatmentRoutes = require('./routes/treatment'); // import the routes
const usersRoutes = require('./routes/users'); // import the routes
const eventsRoutes = require('./routes/events'); // import the routes
const app = express();

app.use(express.json());
app.use('/', diseaseRoutes); 
app.use('/', treatmentRoutes); 
app.use('/', usersRoutes); 
app.use('/', eventsRoutes); 

// database conn
mongoose.connect(
    process.env.MONGODB_URI,
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection : Ready state is:", mongoose.connection.readyState);
    }
);

const listener = app.listen(process.env.PORT || 3001, () => {
    console.log('App listening on port ' + listener.address().port)
})

