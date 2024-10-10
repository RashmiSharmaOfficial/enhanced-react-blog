const mongoose = require("mongoose")


//Schema constructor to create a new schema
//schema is basically structure of the db
const CategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
    },
    
    {timestamps: true}
);

//creating collection
module.exports = mongoose.model("Category", CategorySchema);