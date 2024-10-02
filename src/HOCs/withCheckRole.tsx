import { PERMISSION_ENUM } from "@/interfaces/enum";
import { useAuth } from "@/providers/AuthenticationProvider";
import React from "react";

const withCheckRole = (
  ComponentWrapped: typeof React.Component | React.LazyExoticComponent<React.MemoExoticComponent<any>> | React.ExoticComponent<any>,
  permission?: (PERMISSION_ENUM | "" | string)[]
) => {
  return () => {
    const { user } = useAuth();
    // console.log("user: ", user);
    const role = PERMISSION_ENUM.SYSTEMADMIN ?? user;
    const havePermission = permission?.includes(role);

    if (havePermission) {
      return <ComponentWrapped />;
    }

    return <span>{`You're not have permission to access this!`}</span>;
  };
};

export default withCheckRole;
