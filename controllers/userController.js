var User = require('../models/user');

exports.user_list = async function(req, res) {
    const userList = await User.find();
    res.send(userList);
};
exports.user_iam = async function(req,res){
    var userEmail = req.body.email;
    console.log(userEmail);
    await User.findOne({email : userEmail}, function(err, docs){
        if(err){
            console.log(err);
            res.status(500).send("User not found");
        }
        else res.send(docs);
    })
}
exports.user_detail = async function(req, res) {
    var userId = req.params.id;
    await User.findOne({_id : userId}, function (err, docs){
        if(err){
            console.log(err);
        }
        else res.send(docs);
    })
};
exports.user_create_post = function(req, res) {
    var userDetails = req.body;
    console.log(userDetails);
    var user = new User({
        name : userDetails.name,
        email : userDetails.email
    });
    user.save(function (err){
        if(err){
            console.log(err);
        }
    })
    res.status(201).send(user._id);
};