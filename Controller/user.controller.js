const users = require('../users.json');

// get a random user
module.exports.getRandomUser = (req, res) => {
    const length = users.length;
    const randomNumber = Math.floor(Math.random() * (length - 0))
    res.send(users[randomNumber])
}
// get all user
module.exports.getAllUser = (req, res) => {
    res.send(users)
}

// get some user by query parameter
module.exports.getSomeUser = (req, res) => {
    const quantity = req.params.quantity;
    const result = users.slice(0, quantity)
    res.send(result)
}

// post a user
module.exports.saveUser = (req, res) => {
    const data = req.body;
    const { id, name, gender, contact, address, photoUrl } = data;
    id && name && gender && contact && address && photoUrl ?
        users.push(req.body) && res.send(users)
        :
        res.send("invalid data")
}

// update user data
module.exports.updateOneUser = (req, res) => {
    const reqId = req.params.id;
    const newData = req.body;
    const selected = users.find(user => user.id === Number(reqId))
    if (!selected) {
        res.send('invalid id and user not found')
    }
    else if (!newData) {
        res.send('please provide data')
    }
    else if (selected && newData) {
        const { id, name, gender, contact, address, photoUrl } = newData;
        id ? selected.id = id : selected.id = selected.id
        name ? selected.name = name : selected.name = selected.name
        gender ? selected.gender = gender : selected.gender = selected.gender
        contact ? selected.contact = contact : selected.contact = selected.contact
        address ? selected.address = address : selected.address = selected.address
        photoUrl ? selected.photoUrl = photoUrl : selected.photoUrl = selected.photoUrl
        res.send(selected)
    }

}
 

// delete a user 
module.exports.deleteAUser = (req, res) => {
    const id = req.params.id;
    const selected = users.findIndex(user=>user.id===Number(id))
    selected === -1 ?
        res.send({ result: "failed", message: "user not found" })
        :
    users.splice(selected,1) && res.send(users)
}