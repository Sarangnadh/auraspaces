import Image from "next/image";
import Status from "./_components/Status";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div className="text-center mt-6 px-4">
        <h1 className="text-3xl font-bold sm:text-4xl text-indigo-600">
          Inspiration for Home Interior Designs
        </h1>
        <p className="mt-2 text-gray-700">
          Give your home a new look with these interior design ideas curated for you
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-4">
        <Image
          className="border rounded-3xl shadow-lg w-full"
          src="/hotelbedroom.jpg"
          width={650}
          height={800}
          alt="Hotel Bedroom"
        />
        <Image
          className="border rounded-3xl shadow-lg w-full"
          src="/3dluxurylivingroom.jpg"
          width={650}
          height={800}
          alt="3D Luxury Living Room"
        />
        <Image
          className="border rounded-3xl shadow-lg w-full"
          src="/3droom.jpg"
          width={650}
          height={800}
          alt="3D Room"
        />
      </div>

      {/* Bedroom Interiors Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-100 px-4">
        <div className="sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0">
          <Image
            className="border rounded-3xl shadow-lg w-full"
            src="/3dbedroom.jpg"
            alt="Bedroom"
            width={650}
            height={800}
          />
        </div>
        <div className="sm:w-1/2 sm:ml-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Bedroom Interiors</h2>
          <p className="mb-4">
            Transform your bedroom into a sanctuary of peace and style with our curated interior design ideas.
          </p>
          <p className="mb-4">
            Highlights include smart storage solutions, bespoke headboards, textured walls, and premium-quality furnishings.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
            Explore Bedroom Designs
          </button>
        </div>
      </div>

      {/* Living Room Interiors Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-100 px-4">
        <div className="sm:w-1/2 sm:mr-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Living Room Interiors</h2>
          <p className="mb-4">
            The living room is the heart of your home, a space where you relax, entertain guests, and create memories.
          </p>
          <p className="mb-4">
            Key features include carefully chosen color schemes, comfortable seating arrangements, and stylish decor elements.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
            Explore Living Room Designs
          </button>
        </div>
        <div className="sm:w-1/2 text-center sm:text-right mt-6 sm:mt-0">
          <Image
            className="border rounded-3xl shadow-lg w-full"
            src="/3drendering.jpg"
            alt="3D Luxury Living Room"
            width={650}
            height={800}
          />
        </div>
      </div>

      {/* Kitchen Interiors Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-8 bg-gray-100 px-4">
        <div className="sm:w-1/2 text-center sm:text-left">
          <Image
            className="border rounded-3xl shadow-lg w-full"
            src="/kitchen.jpg"
            alt="Kitchen"
            width={650}
            height={800}
          />
        </div>
        <div className="sm:w-1/2 sm:ml-8 text-gray-700">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-600 mb-4">Kitchen Interiors</h2>
          <p className="mb-4">
            The kitchen is the cornerstone of every home, a space where culinary creativity meets functionality.
          </p>
          <p className="mb-4">
            Key features include smart storage solutions, high-quality countertops, and state-of-the-art appliances.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
            Explore Kitchen Designs
          </button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-8 bg-gray-100 px-4">
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
