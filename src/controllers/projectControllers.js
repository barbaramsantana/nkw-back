const express = require('express');
//error
//const authMiddleware = require('../middlewares/auth');

const Desejos = require('../models/desejos');
const router = express.Router();

//router.use(authMiddleware);

router.get('/', async (req, res)=>{
    try {
        const desejos = await Desejos.find();
        return res.send({desejos});
    } catch (error) {
        return res.status(400).send({error: 'Erro na listagem dos desejos'});
    }
});

router.get('/:desejoId', async (req, res)=>{
    try {
        const desejo = await Desejos.findById(req.params.desejoId).populate('user');
        return res.send({desejo});
    } catch (error) {
        return res.status(400).send({error: 'Erro na listagem do desejo'});
    }
});

router.post('/', async (req, res)=>{
    try {
        const desejo = await Desejos.create({ ...req.body, user: req.userId});
        return res.send({desejo});
    } catch (err) {
        return res.status(400).send({error: 'Erro criando novo desejo'});
    }
});

router.delete('/:desejoId', async (req, res)=>{
    try {
        await Desejos.findByIdAndRemove(req.params.desejoId);
        return res.send();
    } catch (error) {
        return res.status(400).send({error: 'Erro para deletar o desejo'});
    }
});

module.exports = app => app.use('/desejos', router);