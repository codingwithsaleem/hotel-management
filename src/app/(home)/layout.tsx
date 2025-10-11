// import Hearder from "@/components/layouts/Hearder";
import SiteHeader from "@/components/layouts/site-header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
        className="font-inter custom-scrollbar"
      >
        <div className="fixed top-0 left-0 right-0 z-50">
        <SiteHeader />  
        </div>    
      {/* Main Content with proper padding to account for fixed header */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default layout;
