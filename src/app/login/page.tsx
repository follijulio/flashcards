'use client'

/* eslint-disable react-hooks/rules-of-hooks */
import { CreateCookie } from "@/lib/hooks/useCookies";
import { useRouter } from "next/navigation";

const page: React.FC = () => {
  const router = useRouter();
  const createLogin = () => {
    CreateCookie();
    router.push("/");
  };

  return (
    <div>
      <div>
        <button onClick={createLogin}>LOGIN</button>
      </div>
    </div>
  );
};
export default page;
