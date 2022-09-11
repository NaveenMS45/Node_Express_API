import { v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (req, res) => {
  const user = req.body

  users.push({ ...user, id: uuidv4() })

  res.send(`User with the name ${user.firstName} added to the database!`)
}

export const getUsers = (req, res) => {
  console.log(users)
  res.send(users)
}

export const singleUser = (req, res) => {
  const { id } = req.params
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser)
}

export const deleteUser = (req, res) => {
  const { id } = req.params

  //id to delete 123

  //john 123
  //ms 321
  users = users.filter((users) => users.id !== id)
  res.send(`user with the id ${id} deleted from the database`)
}

export const updateUser = ((req, res) => {
    const { id } = req.params;
    const {firstName,lastName,age}=req.body;
    const user = users.find((user) => user.id == id)
    if(firstName){
        user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (age) {
      user.age = age;
    }
    res.send(`user with id ${id} has been updated`)

});
