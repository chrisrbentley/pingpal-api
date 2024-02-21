import { Schema, Document, model, Types } from 'mongoose';

interface Message extends Document {
	chat: Types.ObjectId;
	sender: Types.ObjectId;
	text: string;
}

const MessageSchema = new Schema<Message>({
	chat: { type: Schema.Types.ObjectId, required: true },
	sender: { type: Schema.Types.ObjectId },
	text: { type: String, required: true, minlength: 1, maxlength: 500 },
});

const MessageModel = model<Message>('Message', MessageSchema);

export default MessageModel;
