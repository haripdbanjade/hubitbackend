const mongoose = require('mongoose');
const teamMemberModel = require('../modal/teammember');
const yup = require('yup');

// get request 
module.exports.getteamMember = async (req, res) => {
    try {
        const teamMemberData = await teamMemberModel.find();
        res.status(200).json({ data: teamMemberData, message: 'teamMemberData fetched' })
    } catch (err) {
        res.status(404).json({ messege: err.message, status: err.status })
    }
}

//getsingle request 
module.exports.getSingleteamMember = async (req, res) => {
    try {
        const singleteamMemberData = await teamMemberModel.findById({ _id: req.params.id });
        res.status(200).json({ data: singleteamMemberData, message: "teamMemberData  fetched" });
    } catch (err) {
        res.status(404).json({ messege: err.message, status: err.status });
    }
}
// post request 
module.exports.PostteamMember = async (req, res, upload) => {
    try {
        // await teamMemberData.validate(req.body);
        const url = req.protocol + '://' + req.get('host')
        const newteamMember = new teamMemberModel({
            image: req?.files[0].firebaseUrl,
            name: req.body.name,
            position: req.body.post,
        });
        await newteamMember.save();
        res.status(201).json({ data: newteamMember, message: 'newteamMember has been addded' })
    } catch (err) {
        res.status(422).json({ message: err.message })
    }
}
// Update Request
module.exports.updateteamMember = (req, res) => {
    const { id } = req.params;
    const { name, position } = req.body;
    const imagePath = req?.files[0].firebaseUrl;

    teamMemberModel.findByIdAndUpdate(
        id,
        { $set: { name, position, image: imagePath } },
        { new: true },
        (error, updatedteammember) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(updatedteammember);
                res.send(updatedteammember);
            }
        }
    );
};
// Delete request   
module.exports.DeleteTeamMember = (req, res) => {
    teamMemberModel.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        else {
            return res.status(200).send(data);
        }
    });
};
