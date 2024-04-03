
const user ={
    "name" : "carlos",
    "email" : "cedu468395423@gmai.com", //Email arrumado
    "password": "1234567" // A senha era '123456'
  }

async function verUser(body){

    try{
        const jwt = await fetch("http://localhost:3001/signin", {
            method: 'POST'
        })
        .then((res) => res.json())
        .then((res) => console.log(res))

    }catch(Error){
        console.log(Error)
    }
}

verUser(user)