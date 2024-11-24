import Image from "next/image";
export default function Feature() {
  return (
    <div className="flex flex-col md:flex md:flex-row w-full justify-center text-center bg-[#f2f3f3] gap-x-4">
      <ul className="bg-[#ffffff]">
        <li>
          <Image
            src="/Honda-City.jpg"
            width={400}
            height={100}
            alt="Honda-City"
          />
        </li>
        <li className="text-[#233d7b] m-1 w-400">Price Rs. 70,00,000</li>
        <li>
          <button className="bg-[#ffffff] text-[#000000] px-4 py-1 rounded-md border-2 border-[#444444] m-1">
            Buy Now
          </button>
        </li>
      </ul>
      <ul className="bg-[#ffffff]">
        <li>
          <Image
            src="/Toyota-Corolla.jpg"
            width={400}
            height={100}
            alt="Toyota-Corolla"
          />
        </li>
        <li className="text-[#233d7b] m-1 w-400">Price Rs. 65,00,000</li>
        <li>
          <button className="bg-[#ffffff] text-[#000000] px-4 py-1 rounded-md border-2 border-[#444444] m-1">
            Buy Now
          </button>
        </li>
      </ul>
      <ul className="bg-[#ffffff]">
        <li>
          <Image
            src="/Honda-Civic.jpg"
            width={400}
            height={100}
            alt="Honda-Civic"
          />
        </li>
        <li className="text-[#233d7b] m-1 w-400">Price Rs. 75,00,000</li>
        <li>
          <button className="bg-[#ffffff] text-[#000000] px-4 py-1 rounded-md border-2 border-[#444444] m-1">
            Buy Now
          </button>
        </li>
      </ul>
      <ul className="bg-[#ffffff]">
        <li>
          <Image
            src="/Suzuki-Alto.jpg"
            width={400}
            height={100}
            alt="Suzuki-Alto"
          />
        </li>
        <li className="text-[#233d7b] m-1 w-400">Price Rs. 25,00,000</li>
        <li>
          <button className="bg-[#ffffff] text-[#000000] px-4 py-1 rounded-md border-2 border-[#444444] m-1">
            Buy Now
          </button>
        </li>
      </ul>
    </div>
  );
}
