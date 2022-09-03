const express = require('express');
const PORT = 5000;
const app = express()
const userRoute = require('./Routes/users.route');

app.use(express.json())
app.use('/user',userRoute)



app.get('/', (req, res) => {
    res.send('server running')
})
app.listen(PORT, () => {
    console.log(`server running on the port ${PORT}`)
})