"use client";

import { useAuth } from "@/context";
import { redirect } from "next/navigation";
import { ComponentType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withAuth = (WrappedComponent: ComponentType<any>) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const AuthenticatedComponent = (props: any) => {
    const { loggedIn } = useAuth();

    if (!loggedIn) {
      redirect("/login");
      return null; 
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
