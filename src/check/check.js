const check = (data) =>{

    if(!data) throw new Error('not exist body')

    if(data.name.length <= 0) throw new Error('put the name')
    if(typeof(data.name) != 'string') throw new Error('put a name in string')


    if(!data.email) throw new Error('put the email')
    if(typeof(data.email) !== 'string') throw new Error('put a email in string')
    var re = /\S+@\S+\.\S+/;
    if(!re.test(data.email)) throw new Error('email invalid')

    if(!data.password) throw new Error('put the password')
    if(data.password.length < 6) throw new Error('6 character mini password')
    if(typeof(data.password) != 'string') throw new Error('put a password in string')
}

export default {
    check
}