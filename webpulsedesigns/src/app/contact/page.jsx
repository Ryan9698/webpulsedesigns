import ContactHeader from './ContactHeader';
export default function Contact() {
  return (
    <div className="w-full h-screen flex justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 max-w-3xl w-full shadow-xl">
        <ContactHeader />
      </div>
    </div>
  );
}
