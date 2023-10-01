"use client";
import { useState, useEffect } from "react";
import { signIn, getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [providers, setProviders] = useState<any>({});
  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);
  return (
    <div className="grid ">
      {Object.values(providers).map((provider: any) => {
        // if (provider.id === "credentials") return <div key="credentials"></div>;

        return (
            
          <button
            key={provider.id}
            onClick={() => signIn(provider.id)}
            >
            {provider.name}
          </button>
        );
      })}
    </div>
  );
};


export default LoginPage;
