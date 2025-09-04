import mongoose, { trusted } from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        profileImageUrl: { type: String, default: null },
    }, { timestamps: true }
)


// Hash password before saving
UserSchema.pre('save', async (next) => {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// Compare Password
UserSchema.methods.comparePassword = async (condidatePassword) => {
    return await bcrypt.compare(condidatePassword, this.password)
}



const User = mongoose.model("User", UserSchema);
export default User;
