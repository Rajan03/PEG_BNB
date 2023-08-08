// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {mailOptions, transporter} from "@/lib/nodemailer";

type Data = {
    message: string, error?: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // Process a POST request
        const data = req.body
        if (!data.name || !data.email || !data.message) {
            return res.status(400).json({message: 'Bad Request'})
        }

        // Send email
        try {
            const info = await transporter.sendMail({
                ...mailOptions,
                subject: `New message from ${data.name} (${data.email})`,
                text: data.message,
            })

            return res.status(200).json({message: 'Success'})
        } catch (error) {
            console.error(error)
            return res.status(500).json({error, message: 'Internal Server Error'})
        }
    }

    // Handle any other HTTP method
    return res.status(400).json({message: 'Bad Request'})
}
