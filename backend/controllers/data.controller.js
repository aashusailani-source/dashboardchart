const DataModel = require("../models/dataSchema");

exports.getAllData = async (req, res) => {
    try {
        const data = await DataModel.find();

        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            data,
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "Failed to get the data",
        })
    }
}