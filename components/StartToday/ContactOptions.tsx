import Image from 'next/image';
import call from "../../public/icons/call.svg";
import message from "../../public/icons/message.svg";
import whatsap from "../../public/icons/whatsap.svg"

const contactMethods = [
  {
    icon: message,
    title: 'Email Us',
    desc: 'Get a detailed response',
    value: 'contact@growbytech.com',
  },
  {
    icon: call,
    title: 'Call Us',
    desc: 'Speak directly with our team',
    value: '+91 70091 33648',
  },
  {
    icon: whatsap,
    title: 'WhatsApp',
    desc: 'Quick chat support',
    value: '+91 70091 33648',
  },
];

export default function ContactOptions() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contactMethods.map((method, i) => (
          <div
            key={i}
            className="bg-white text-black p-5 rounded-lg shadow text-center"
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-green-10 rounded-lg flex items-center justify-center">
              <Image src={method.icon} alt={method.title} width={24} height={24} />
            </div>

            <h4 className="font-bold">{method.title}</h4>
            <p className="text-sm text-gray-700">{method.desc}</p>
            <p className="text-emerald-600 font-medium mt-2">{method.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
