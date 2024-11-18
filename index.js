const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');
const app = require('./app');

mongoose.connect(MONGODB_URI)
    .then(
        
        () =>{
            console.log('Connected to Mongo Db');

            app.listen(PORT, () =>{
                console.log('Server running on port 3001');
            });
        }
    )
    .catch(() =>console.error('not connected'));