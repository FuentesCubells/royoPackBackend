const {response, request} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');


const postUser = async( request, response ) => {
    try {
        const { nombre, email, telf } = request.body;
        
        const newUser = new User ({
            nombre: nombre,
            email: email,
            telefono: telf
        });
        
        const userSvd = await newUser.save();

        if( userSvd ) {
            response.status(200).json({
                ok: true,
                info: newUser ? 'Datos registrados' : 'Error',
            })
        }

    } catch (error) {
        response.status(500).json({
            ok: false,
            error: error.message,
            message: 'Something went wrong'
        })
    }
}

module.exports = {
    postUser
}