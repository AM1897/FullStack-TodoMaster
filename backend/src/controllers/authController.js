import UserModel from '../models/User.js'; // ändrade här
import jwt from 'jsonwebtoken';


const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const user = new UserModel({ username, password });

    await user.save();

    // Create a JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with the token
    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });  // Ändring här
    console.error(error);
  }
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  // Check if the user exists in the database
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Check if the password is correct
  if (!await user.isValidPassword(password)) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  // Generate a JSON Web Token (JWT) for the user
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return res.status(200).json({ message: "Login successful", token });
};

export { registerUser, loginUser };

