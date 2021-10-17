const mongoose = require('../database/index');
const bcrypt = require('bcryptjs');

const DesejosSchema = new mongoose.Schema({
    descricao:{
        type: String,
        require:true,
    },
    quarto:{
        type: Number,
        //require:false,
    },
    suite:{
        type: Number,
        //require:false,
    },
    cozinha:{
        type: Number,
        //require:false,
    },
    localidade:{
        type: String,
        //require:false,
    },
    area:{
        type: Number,
        //require:false,
    },
    vagaGaragem:{
        type: Number,
        //require:false,
    },
    valor:{
        type: Number,
        //require:false,
    },
    taxaCond:{
        type: Number,
        //require:false,
    },
    favorito:{
        type: Number,
        //require:false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //require: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
});

const Desejos = mongoose.model('Desejos', DesejosSchema);

module.exports = Desejos;