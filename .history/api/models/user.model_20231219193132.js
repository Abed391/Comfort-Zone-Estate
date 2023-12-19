import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fprofile&psig=AOvVaw1ymrocL5Pqz5mv_IGL6Hgo&ust=1703089786644000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLDL_o32m4MDFQAAAAAdAAAAABAE"
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;