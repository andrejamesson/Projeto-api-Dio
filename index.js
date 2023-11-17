const user ={
    "name" : "carlos",
    "email" : "cedu468395423@gmai.c0m",
    "password": "123456"
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