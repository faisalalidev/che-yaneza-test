import mongoose from "mongoose";
const { String, Number, ObjectId, Boolean } = mongoose.Schema.Types;

const InfoSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    
});
export default mongoose.models.info || mongoose.model("info", InfoSchema);
