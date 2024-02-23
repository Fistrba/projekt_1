import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
    return (
    <div className="bg-gradient w-full min-h-screen flex justify-center items-center" >
      <SignUp />
    </div>
    );
  }