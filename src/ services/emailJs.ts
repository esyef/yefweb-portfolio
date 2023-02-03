import emailJS from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!;
const apiKey = process.env.NEXT_PUBLIC_EMAILJS_APIKEY;

type MESSAGE_TEMPLATE = {
  userName: string;
  email: string;
  mesagge: string;
};

const sendEmail = async (messageTemplate: MESSAGE_TEMPLATE) => {
  await emailJS.send(serviceId, 'contact_form', messageTemplate, apiKey);
};

export default sendEmail;
