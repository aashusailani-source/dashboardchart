const mongoose = require('mongoose');
const jsonData = require('../data/data.json');
const DataModel = require('../models/dataSchema');

exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Connection Successfully");

        const existingData = await DataModel.findOne({end_year: jsonData[0].end_year});

        if(!existingData){
            await DataModel.insertMany(jsonData);
            console.log("Data inserted successfully" , jsonData.length);
        }else{
            console.log("Data already Exists", jsonData.length);
        }

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}