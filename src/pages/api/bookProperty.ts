import {NextApiRequest, NextApiResponse} from "next";
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
        if (!data.name || !data.email || !data.phone) {
            return res.status(400).json({message: 'Bad Request'})
        }

        // Send email
        try {
            const info = await transporter.sendMail({
                ...mailOptions,
                subject: `New message from ${data.name} (${data.email})`,
                text: data.name,
                html: `
<h1 style="margin-top: 0; font-size: 24px; color: #570a0a;">New Booking Request</h1>
    <p>Dear <span style="font-weight: bold; color: #570a0a">Admin</span>,</p>
    
    <p>A new booking request has been made for the following property:</p>
    
    <ul style="margin: 0; padding: 0; list-style: none;">
      <li style="margin-bottom: 10px;"><span style="font-weight: bold; color: #570a0a">Property name:</span>${data.property.title}</li>
      <li style="margin-bottom: 10px;"><span style="font-weight: bold; color: #570a0a">Property Price:</span>${data.property.price}</li>
      <li style="margin-bottom: 10px;"><span style="font-weight: bold; color: #570a0a">Check-in date:</span>${data.checkIn}</li>
      <li style="margin-bottom: 10px;"><span style="font-weight: bold; color: #570a0a">Check-out date:</span>${data.checkOut}</li>
      <li style="margin-bottom: 10px;"><span style="font-weight: bold; color: #570a0a">User name:</span>${data.name}</li>
      <li style="margin-bottom: 10px;"><span style="font-weight: bold; color: #570a0a">User email:</span>${data.email}</li>
      <li style="margin-bottom: 10px;"><span style="font-weight: bold; color: #570a0a">Contact No.:</span>${data.phone}</li>
    </ul>
    
    <p>Please review the details above and take the necessary steps to confirm or reject the booking request. You may contact the user directly using the email address provided.</p>
    
    <p>Thank you for your attention to this matter.</p>
    
    <p>Best regards,</p>`,
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
