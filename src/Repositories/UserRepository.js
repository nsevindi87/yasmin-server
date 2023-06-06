import Users from "../model/UsersModel.js"

const getUsers = async () => {
  try {
    const users = await Users.findAll()
    return users
  } catch (error) {
    throw new Error('error while getting users');
  }

}

const getUserByEmail = async (pEmail) => {
  try {
    const user = await Users.findOne({
      where: {
        email: pEmail
      }
    })
    return user;
  } catch (error) {
    throw new Error('error while getting users');
  }
} 

const createUser = async (pUser) => {
  try {
    const existingUser = await Users.findOne({ where: { email: pUser.email } });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    // Create new user if email does not exist
    const newUser = await Users.create(pUser);
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};



export default {
  getUsers,
  createUser,
  getUserByEmail,
}