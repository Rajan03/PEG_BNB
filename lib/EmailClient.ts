import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS
    }
})

const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
}

export const sendEmail = async (options: any) => {
    const emailOptions = {
        ...mailOptions,
        ...options
    }

    await transporter.sendMail(emailOptions)
}
