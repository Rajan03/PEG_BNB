import {NextApiRequest, NextApiResponse} from 'next';
import connectDB from '@/lib/db.config';
import {sendEmail} from "@/lib/EmailClient";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req;

    switch (method) {
        case 'POST':
            await Post(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}


// Registers a new user and sends a verification email to the user
async function Post(req: NextApiRequest, res: NextApiResponse) {
    const {email, password, name} = req.body;

    // Check if fields are empty
    if (!email || !password || !name) {
        return res.status(400).json({
            status: "error",
            message: "Please enter email, password and username"
        });
    }

    try {
        // Database Connection
        await connectDB();

        // Check if user already exists
        const alreadyExists = await User.findOne({email});
        if (!!alreadyExists) {
            return res.status(400).json({
                status: "error",
                message: "User already exists"
            });
        }

        // POST Data
        const user = await User.create({
            email,
            password,
            name,
        });

        // If user is created successfully, send verification email
        if (!!user) {
            const verifyUrl = process.env.NEXT_PUBLIC_API_URL + '/verify/' + user._id;
            await sendEmail({
                to: email,
                subject: "Verify your email",
                text: "Please verify your email by clicking the link below",
                html: `<div class="container">
                            <h1>Verify your email</h1>
                            <p>Please verify your email by clicking the link below</p>
                            <a href="${verifyUrl}">Verify Email</a>
                        </div>`
            })
        }

        // Return Data
        res.status(200).json({
            status: 'success',
            message: 'User created successfully',
            data: user
        });
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
}
