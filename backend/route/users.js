const User = require("../models/user.js")
const router = require('express').Router();
const bcrypt = require('bcrypt')
//update user
router.put("/:id",async (req,res) =>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                //rehash the password if updated
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }catch(err){
                res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                //set all stuff inside the request's body from postman
                $set:req.body,
            });
            res.status(200).json("Account has been updated");
            
        } catch(error) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Account doesn't match")
    }
})
//delete user
router.delete("/:id",async (req,res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("Account has been deleted");
        } catch(err) {
            return res.status(500).json(err);
        }
    } else {
        console.log(req.body.userId);
        console.log(req.params.id);
        return res.status(403).json("You can only delete your account")
    }
})
//get a user
router.get("/", async (req, res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId?
        await User.findById(userId):
        await User.findOne({username:username})
        const {password, updatedAt, isAdmin, ...other} = user._doc
        res.status(200).json(other)
    }catch(err){
        res.status(404).json(err)
    }
})
//follow a user
router.put("/:id/follow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}})
                await currentUser.updateOne({$push:{following:req.body.userId}})
                res.status(200).json(`you're now following ${user.username}`)
            } else {
                res.status(403).json("You're already following this person")
            }
        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("lol you're trying to follow yourself?")
    }
})
//unfollow a user
router.put("/:id/unfollow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}})
                await currentUser.updateOne({$pull:{following:req.body.userId}})
                res.status(200).json(`you're now not following ${user.username}`)
            } else {
                res.status(403).json("You're already not following this person")
            }
        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("lol you're trying to follow yourself?")
    }
})
module.exports = router;