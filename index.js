
const user ={
    "name" : "carlos",
    "email" : "cedu4683954233@gmai.com", //Email arrumado
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