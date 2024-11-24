import Image from "next/image";
export default function Body() {
  return (
    <div className=" bg-[#f2f3f3]">
      <nav className="flex justify-center items-center gap-x-4 bg-transparent h-96 w-full">
        <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 ml-28 text-center">
          <ul>
            <Image
              className="-mt-4 ml-0"
              src="/Toyota-Corolla.jpg"
              width={270}
              height={100}
              alt="Toyota Corolla"
            />
            <li className="text-[#233d7b] font-bold">Toyota Corolla</li>
            <li className="text-[#3eb549] text-sm">PKR 59.7-75.5 lacs</li>
            <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
              <span className="text-yellow-400 flex mr-2"> *****</span> 621
              Reviews
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 text-center">
          <ul>
            <Image
              className="-mt-4 ml-0"
              src="/Suzuki-Alto.jpg"
              width={270}
              height={100}
              alt="Suzuki Alto"
            />
            <li className="text-[#233d7b] font-bold">Suzuki Alto</li>
            <li className="text-[#3eb549] text-sm">PKR 23.3-30.5 lacs</li>
            <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
              <span className="text-yellow-400 flex mr-2"> *****</span> 200
              Reviews
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 text-center">
          <ul>
            <Image
              className="-mt-4 ml-0"
              src="/Honda-City.jpg"
              width={270}
              height={100}
              alt="Honda City"
            />
            <li className="text-[#233d7b] font-bold">Honda City</li>
            <li className="text-[#3eb549] text-sm">PKR 46.5-58.5 lacs</li>
            <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
              <span className="text-yellow-400 flex mr-2"> *****</span> 458
              Reviews
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center bg-[#ffffff] h-72 w-1/4 mr-28 text-center">
          <ul>
            <Image
              className="-mt-4 ml-0"
              src="/Honda-Civic.jpg"
              width={270}
              height={100}
              alt="Honda Civic"
            />
            <li className="text-[#233d7b] font-bold">Honda Civic</li>
            <li className="text-[#3eb549] text-sm">PKR 86.6-99.0 lacs</li>
            <li className="text-[#7b8397] text-sm pt-1 flex justify-center">
              <span className="text-yellow-400 flex mr-2">*****</span> 358
              Reviews
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
