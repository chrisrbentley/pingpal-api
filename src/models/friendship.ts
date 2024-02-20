import { Schema, Document, model, Types } from 'mongoose';

type friendshipStatus = 'accepted' | 'pending';

interface Friendship extends Document {
	status: friendshipStatus;
	user1: Types.ObjectId;
	user2: Types.ObjectId;
}

const FriendshipSchema = new Schema<Friendship>({
	status: { type: String, enum: ['accepted, string'], required: true },
	user1: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	user2: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const FriendshipModel = model<Friendship>('Friendship', FriendshipSchema);

export default FriendshipModel;
