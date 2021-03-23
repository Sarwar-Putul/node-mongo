const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const users= ['Sarwar', 'Nahiyaan', 'Putul', 'Krishaan', 'Betu','Sharaf', 'Rafi'];

app.get('/', (req, res) => {
const friut= {
    product:'ada',
    price: 120
}
    res.send(friut);
})

app.get('/users/:id',(req, res) =>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
    
})

//Post

app.post('/addUser',(req, res) =>{
    //Save to database
    const user = req.body;
    user.id =23
    res.send(user);
})


app.listen(3000, () => console.log('Listening to port 3000'))