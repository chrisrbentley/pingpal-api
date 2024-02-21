import { Schema, Document, model, Types } from 'mongoose';

interface Chat extends Document {
	members: Types.ObjectId[];
	messages: Types.ObjectId[];
}

const ChatSchema = new Schema<Chat>({
	members: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
	messages: [{ type: Schema.Types.ObjectId, ref: 'Message', required: true }],
});

const ChatModel = model<Chat>('Chat', ChatSchema);

export default ChatModel;
