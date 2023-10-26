import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

// Hash the password before saving it in the database
UserSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to compare password for login
UserSchema.methods.isValidPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;