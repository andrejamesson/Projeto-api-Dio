function validetSchema(schema){
    return ( req , res, next) =>{
        const { error } = schema.validate(req.body , { abortEarly: false })

        if(error){
            const erro = error.details.map((errors) => errors.message)

            return res.status(422).send(erro)
        }

        next()
    }
}

export default validetSchema