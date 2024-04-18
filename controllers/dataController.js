const { DataModel } = require("../models/model");

let addCount = 0;
let updateCount = 0;


const createData = async (req, res) => {
    const { name, description } = req.body
    try {
        const newData = new DataModel({ name, description });
        await newData.save();
        // console.timeEnd('addData');
        addCount++;
        res.json({ message: 'DataModel added successfully!', newData: newData });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message });
    }
};

const getData = async (req, res) => {
    try {
        const getData = await DataModel.find();
        res.json({ message: 'Get DataModel successfully!', data: getData });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateData = async (req, res) => {
    const paylaod = req.body
    try {
        const { id } = req.params;
        const updatedData = await DataModel.findByIdAndUpdate(id, paylaod, { new: true });
        if (!updatedData) {
            return res.status(404).json({ error: 'DataModel not found' });
        }
        console.timeEnd('editData');
        updateCount++
        res.json({ message: 'DataModel updated successfully!', updatedData: updatedData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCount = (req, res) => {
    res.json({ addCount, updateCount });
};


module.exports = {
    createData,
    updateData,
    getCount,
    getData
};
