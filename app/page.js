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
        <Status />
      </div>
      

    </div>
  );
}
