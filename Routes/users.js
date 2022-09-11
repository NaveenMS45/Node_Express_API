import express from 'express';

import {v4 as uuidv4} from 'uuid';
uuidv4();

import {createUser,getUsers,singleUser,deleteUser,updateUser} from '../controllers/users.js'

const router = express.Router();


// All routes in here are starting with /users
router.get('/',getUsers)

//post ==> req.body
router.post('/',createUser)

//get single user ==> req.params
router.get('/:id', singleUser)

//delete user
router.get('/:id', deleteUser)

//update user
router.patch('/:id', updateUser)



export default router