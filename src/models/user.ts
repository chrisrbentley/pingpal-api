import { Schema, Document, model } from 'mongoose';

interface User extends Document {
	username: string;
	password: string;
}

const UserSchema = new Schema<User>({
	username: { type: String, required: true, minlength: 6, maxlength: 20 },
	password: { type: String, required: true, minlength: 8, maxlength: 20 },
});

const UserModel = model<User>('User', UserSchema);

export default UserModel;
