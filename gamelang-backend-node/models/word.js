const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wordSchema = new Schema ({
    word : {
        type : String,
        require : true
    },

    difficulty : {
        type : String,
        require : false
    },

    language : {
        type : String,
        require : true
    },

    description : {
        type : String,
        require : false
    },

    example : {
        type : String,
        require : false
    },

    date : {
        type : Date,
        default : Date.now
    }

}, {strict : false})

const Word = mongoose.model('Word' , wordSchema)

module.exports = Word

