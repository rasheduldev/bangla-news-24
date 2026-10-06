"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className=" absolute right-[-420] top-4">
      {user ? (
        <div className="flex flex-col items-center gap-1">
          <Link href={"/profile"}>
            <div className="avatar">
              <div className="w-10 rounded">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
          </Link>
          <h2>{user?.name}</h2>
          <button
            onClick={handleSignOut}
            className="btn btn-error btn-sm text-white"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex itmes-center gap-3 text-sm">
          <Link href={"/sign-in"}>
            <button className="btn">সাইন ইন</button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn bg-red-600 text-white">সাইন আপ</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
