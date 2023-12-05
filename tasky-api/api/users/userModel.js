import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {
    type: String, 
    match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 
    message: 'Password must be at least 8 characters long and include at least one letter, one digit, and one special character (@$!%*#?&)', required: true 
  }
});

export default mongoose.model('User', UserSchema);