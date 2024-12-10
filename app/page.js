import Image from "next/image";
import Status from "./_components/Status";

export default function Home() {
  return (
    <div>
      <div>
        <div className="text-center mt-3">
          <h1 className="text-3xl font-bold sm:text-4xl  text-indigo-600">
            Inspiration for home interior designs </h1>
          <p className="mt-2"> Give your home a new look with these interior design ideas curated for you</p>
        </div>

        <div className=" grid grid-cols-3 mt-3  ">
          <div className="row-span-3 flex flex-col-3 gap-3 mt-4">

            <Image
              className="border rounded-3xl"
              src='/hotelbedroom.jpg'
              width={650}
              height={800}
            />

            <Image
              className="border rounded-3xl"
              src='/3dluxurylivingroom.jpg'
              width={650}
              height={800}
            />
            <Image
              className="border rounded-3xl"
              src='/3droom.jpg'
              width={650}
              height={800}
            />
          </div>
        </div>
      </div>

     

      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-200 px-4">
        {/* Left Section: Living Room Image */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <Image
            className="border rounded-3xl shadow-lg"
            src='/3dbedroom.jpg'
            alt="bedRoom"
            width={650}
            height={800}
          />
        </div>

        {/* Right Section: Bedroom Interior Description */}
        <div className="sm:w-1/2 mt-6 sm:mt-0 sm:ml-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Bedroom Interiors</h2>
          <p className="mb-4">
            Transform your bedroom into a sanctuary of peace and style with our curated interior design ideas. From cozy minimalism to luxurious modern aesthetics, we offer a variety of options to suit your taste and needs.
          </p>
          <p className="mb-4">
            Our designs focus on creating an ambiance that promotes relaxation and comfort, featuring soothing color palettes, plush furniture, and intelligent lighting. Whether you're redesigning your master bedroom or a guest room, our ideas aim to elevate your space with functionality and elegance.
          </p>
          <p className="mb-4">
            Highlights include smart storage solutions, bespoke headboards, textured walls, and premium-quality furnishings. Let us inspire you to craft a personalized retreat that's both stylish and practical.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
            Explore Bedroom Designs
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-200 px-4">
  {/* Left Section: Living Room Description */}
  <div className="sm:w-1/2 sm:mr-8 text-gray-700">
    <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Living Room Interiors</h2>
    <p className="mb-4">
      The living room is the heart of your home, a space where you relax, entertain guests, and create memories. Our designs focus on enhancing this vital area with functionality, elegance, and warmth.
    </p>
    <p className="mb-4">
      Key features include carefully chosen color schemes, comfortable seating arrangements, and stylish decor elements. From contemporary layouts to cozy traditional designs, we tailor the living room to reflect your personal taste.
    </p>
    <p className="mb-4">
      We prioritize creating a harmonious blend of aesthetics and practicality. Whether you're looking for minimalist vibes or opulent luxury, our living room ideas aim to elevate your space to its full potential.
    </p>
    <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
      Explore Living Room Designs
    </button>
  </div>

  {/* Right Section: Living Room Image */}
  <div className="sm:w-1/2 text-center sm:text-right mt-6 sm:mt-0">
    <Image
      className="border rounded-3xl shadow-lg"
      src="/3drendering.jpg"
      alt="3D Luxury Living Room"
      width={650}
      height={800}
    />
  </div>
</div>


<div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-200 px-4">
        {/* Left Section: Living Room Image */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <Image
            className="border rounded-3xl shadow-lg"
            src='/kitchen.jpg'
            alt="bedRoom"
            width={650}
            height={800}
          />
        </div>

        {/* Right Section: Bedroom Interior Description */}
        <div className="sm:w-1/2 mt-6 sm:mt-0 sm:ml-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Bedroom Interiors</h2>
          <p className="mb-4">
            Transform your bedroom into a sanctuary of peace and style with our curated interior design ideas. From cozy minimalism to luxurious modern aesthetics, we offer a variety of options to suit your taste and needs.
          </p>
          <p className="mb-4">
            Our designs focus on creating an ambiance that promotes relaxation and comfort, featuring soothing color palettes, plush furniture, and intelligent lighting. Whether you're redesigning your master bedroom or a guest room, our ideas aim to elevate your space with functionality and elegance.
          </p>
          <p className="mb-4">
          Our designs focus on optimizing space and workflow, ensuring that every inch of your kitchen serves a purpose. Whether you prefer a vibrant splash of color or a minimalist monochrome look, we help you achieve the perfect balance of style and functionality.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
          Explore Kitchen Designs
          </button>
        </div>
      </div>

      <div className="text-center py-8 bg-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">
          Ready to Redesign Your Space?
        </h2>
        <p className="mb-6 text-gray-700">
          Explore our collection of interior designs and start your journey to a better home today!
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
          Get Started
        </button>
      </div>
      <Status />

    </div>
  );
}
