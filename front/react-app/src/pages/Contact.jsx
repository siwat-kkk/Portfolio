// import React from "react";
// import logo from "../logo.svg";
// import "../css/Pages.css";

// function Contact() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="w-full flex flex-row">
//         <div className="w-1/2 bg-blue-500 min-h-screen flex flex-col items-center justify-center">
//           <h2 className="text-2xl font-bold text-white">This is Contact</h2>
//           <a
//             href="https://www.youtube.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="my-4 w-32 h-32 bg-purple-500 flex items-center justify-center text-white rounded-lg"
//           >
//             <div>
//               <p>Contact</p>
//             </div>
//           </a>
//           <p className="mt-4 text-lg text-white">
//             Click block to open YouTube in a new tab
//           </p>
//         </div>
//         <div className="w-1/2 bg-green-500 min-h-screen flex flex-col items-center justify-center">
//           <h2 className="text-2xl font-bold text-white">Right Half</h2>
//           <p className="mt-4 text-lg text-white">
//             This is the right half of the page.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

// import React from "react";
// import logo from "../logo.svg";
// import "../css/Pages.css";

// function Contact() {
//   return (
//     <div className="flex min-h-screen">
//       <div className="w-1/2 bg-blue-500 min-h-screen"></div>
//       <div className="w-1/2 bg-green-500 min-h-screen"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold">This is Contact</h2>
//           <a
//             href="https://www.youtube.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="my-4 w-32 h-32 bg-purple-500 flex items-center justify-center text-white rounded-lg"
//           >
//             <div>
//               <p>Contact</p>
//             </div>
//           </a>
//           <p className="mt-4 text-lg">
//             Click block to open YouTube in a new tab
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import "../css/Pages.css";

function Contact() {
  return (
    <div className="contactpage">
      <div className="firsthalf">
        <div className="min-h-screen flex items-center justify-center relative">
          <div className="z-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">This is Contact</h2>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="my-4 w-32 h-32 bg-purple-500 flex items-center justify-center text-white rounded-lg"
            >
              <div>
                <p>Contact</p>
              </div>
            </a>
            <p className="mt-4 text-lg">
              Click block to open YouTube in a new tab
            </p>
          </div>
        </div>
      </div>
      <div className="secondhalf">
        <h1>Hello</h1>
        <h1>Hello1</h1>
        <h1>Hello2</h1>
        <h1>Hello3</h1>
        <h1>Hello4</h1>
      </div>
    </div>
  );
}

export default Contact;
