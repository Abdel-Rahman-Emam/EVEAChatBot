const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type: String,
        required:true,
        min: 6
    },
    profilePicture: {
        type:String,
        default:"",
    },
    coverPicture: {
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    desc:{
        type: String,
        max:50
    },
    City:{
        type:String,
        max:20
    },
    from:{
        type: String,
        max: 25

    },
    Relationship:{
        type: Number,
        enum: [1,2,3]
    }
},
{timestamps: true})

module.exports = mongoose.model("User", userSchema);