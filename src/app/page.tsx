"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DeleteCookie, VerifyCookie } from "@/lib/hooks/useCookies";
import { DrawerDemo } from "./ui/Drawer";

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(
    () => {
      const checkAuthentication = async () => {
        const isValid = await VerifyCookie();
        if (isValid) {
          setIsAuthenticated(true);
        } else {

          router.push("/login");
        }
        setIsLoading(false);
      };

      checkAuthentication();
    },
    [router]
  );

  if (isLoading || !isAuthenticated) {
    return <div>Carregando...</div>;
  }

  const disconect = () => {
    DeleteCookie();
    router.push('/login')
  }
  return (
    <div className="">
      <DrawerDemo />
    </div>
  );
};

export default Page;
