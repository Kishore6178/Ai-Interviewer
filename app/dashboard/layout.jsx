"use client";
import React from "react";
import Header from "./_components/Header";
import logo from "../../public/logo.svg";
import { createContext, useState } from "react";
export const WebCamContext = createContext();

const DashboardLayout = ({ children }) => {
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  return (
    <div>
        <Header logo={logo} />
        <div className="mx-5 md:mx-20 lg:mx-36">
          <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
            {children}
          </WebCamContext.Provider>
        </div>
    </div>
  );
};

export default DashboardLayout;



// "use client";
// import React, { createContext, useState } from "react";
// import Header from "./_components/Header";
// import logo from "../../public/logo.svg";

// export const WebCamContext = createContext();

// const DashboardLayout = ({ children }) => {
//   const [webCamEnabled, setWebCamEnabled] = useState(false);

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 h-full w-full object-cover -z-10"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="\bg.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark Overlay (Optional for readability) */}
//       <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 -z-5"></div>

//       {/* Header */}
//       <Header logo={logo} />

//       {/* Main Content */}
//       <div className="relative mx-5 md:mx-20 lg:mx-36">
//         <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
//           {children}
//         </WebCamContext.Provider>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
