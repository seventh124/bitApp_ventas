const {user_model} = require('../models');
const joi = require('@hapi/joi');


verifyTypes = (req, res, next) => {
    const user_joi = joi.object({
        _id: joi.optional(),
        name: joi.string().required(),
        document: joi.number().required(),
        phone: joi.number().required(),
        date: joi.date().required(),
        rol: joi.boolean().required(),
        state: joi.boolean().required()
    });
const {error} = user_joi.validate(req.body);

    if(error) return res.status(400).json({
        mensaje: error.details[0].message,
        error: true});
        next();
};

verifyDocument = (req, res, next) => {
    user_model.findOne({document: req.body.barcode}).exec((error, user) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        if(user) return res.status(400).json({error:true, mensaje: user.description + "EStá registrado con el documento " + user.document});
        next();  
    });
}

module.exports = Object.freeze({
    verifyTypes,
    verifyDocument
});