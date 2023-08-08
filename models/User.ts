import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema<IUser>(
    {
        name: {
            type: String,
            required: [true, 'Please enter a name'],
            trim: true,
            maxlength: [20, 'Name cannot be more than 20 characters'],
            minlength: [3, 'Name must be at least 3 characters']
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            trim: true,
            maxlength: [50, 'Email cannot be more than 50 characters'],
            minlength: [3, 'Email must be at least 3 characters']
        },
        image: {
            type: String,
            default: '/user.png',
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
            minlength: [6, 'Password must be at least 6 characters'],
            select: false
        }
    },
    {
        timestamps: true
    });

UserSchema.pre('save', async function (next) {
    const user = this as any;

    if (!user.isModified('password')) return next();

    // Hash password using bcrypt\
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    return next();
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    const user = this as any;
    return await bcrypt.compare(candidatePassword, user.password);
}

export default mongoose.models.Client || mongoose.model('Client', UserSchema);
