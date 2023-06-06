import express from 'express';
import userRepository from '../Repositories/UserRepository.js'

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await userRepository.getUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: 'Error fetching users' });
  }
});

// Get profile by mail
router.get('/profile/:email',  async (req, res) => {
  try {
    const userEmail = req.params.email
    const user = await userRepository.getUserByEmail(userEmail);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: 'Error fetching users' });
  }
});


// Create a new user
router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, birthday } = req.body;
    const newUser = { firstName, email, lastName, birthday };
    const user = await userRepository.createUser(newUser);
    return res.status(201).send(user);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).send({ message: 'Invalid user input' });
    } else if (error.message === 'User with this email already exists') {
      return next({ message: 'A user with this email already exists' });
    } else {
      return next(error);
    }
  }
});

export default router;