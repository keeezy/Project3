import React from "react";
import ServiceUserProfile from "./subcomponents/ServiceUserProfile";
import Tabs from "./subcomponents/Tabs";

export default function ServicePage() {
  return (
    <>
      {/* AVATAR + NAME */}

      <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div className="py-8">
            <ServiceUserProfile />

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 bg-gray-100">
              <div className="inline-block min-w-full"></div>
            </div>
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
}
