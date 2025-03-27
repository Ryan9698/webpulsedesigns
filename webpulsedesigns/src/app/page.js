import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        src="https://dummyimage.com/300.png/09f/fff"
        alt="Picture of the author"
        width={600}
        height={400}
      />
      <h1 className="text-3xl font-bold underline text-white font-inter">
        Custom Designs
      </h1>
      <h2 className="text-3xl font-bold underline text-white font-geist">
        SEO and Web Services
      </h2>
      <h3 className="text-3xl font-bold underline text-white font-geistMono">
        Customer Service
      </h3>
      <h4 className="text-3xl font-bold underline text-white font-dmSans">
        DM Sans font sample text
      </h4>
    </div>
  );
}
