import {BookingFormData, ContactFormData} from "@/types/app";

export const sendContactForm = async (data: ContactFormData) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response.json();
}


export const sendBookingForm = async (data: BookingFormData) => {
    const response = await fetch('/api/bookProperty', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response.json();
}
