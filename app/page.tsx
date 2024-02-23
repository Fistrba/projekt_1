import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import img from "../public/pexels-steve-johnson-12939554.jpg"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  
    <>
    
      <main id="main" className="bg-gradient w-full min-h-screen" >

        <Navbar />
      
        <div id="home" className="w-full h-[calc(100vh-84px)] flex justify-center items-center" >

          <div className="h-[70%] flex w-[85%] justify-center items-center" >
            <div className="w-[60%]" >
              <h2 className="text-[#ffffff] text-5xl font-bold" >Projekt</h2>
              <p className="text-[#f8f8f8e7] text-md font-light w-3/4 mt-4" >It is projekt about clerk auth and connected to the databases. Like mongodb, firebase, superabase,. Lorem ipsun dolor sit It is projekt about clerk auth and connected. It is projekt about clerk auth and connected to the databases. Like mongodb, firebase, superabase,. Lorem ipsun dolor sit It is projekt about clerk auth and connected.</p>
              <button className="bg-white py-3 px-9 text-md font-light rounded-lg mt-10" >Read more</button>
            </div>
            
            <div className="w-[40%] h-[70%] home_bg" >
              
            </div>
          </div>

        </div>

      </main>
    
    </>

  );
}
