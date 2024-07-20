// import React from "react";

// function Footer() {
//   return (
//     <div>
//       <hr />
//       <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
//         <nav className="grid grid-flow-col gap-4">
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav>
//           <div className="grid grid-flow-col gap-4">
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//               </svg>
//             </a>
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//             <a>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </div>
//         </nav>
//         <aside>
//           <p>Copyright © 2024 - All right reserved by Nilesh</p>
//         </aside>
//       </footer>
//     </div>
//   );
// }

// export default Footer;

import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="#" className="link link-hover">About us</a>
          <a href="#" className="link link-hover">Contact</a>
          <a href="#" className="link link-hover">Jobs</a>
          <a href="#" className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/nileshpatil1209/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-current"
              >
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zm-6.46 20.41h-3.64V14.8c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7H6.51V9h3.49v1.56h.05c.49-.92 1.69-1.87 3.48-1.87 3.72 0 4.41 2.45 4.41 5.63v6.09zm-11.82-12.4c-1.17 0-2.11-.95-2.11-2.11s.95-2.11 2.11-2.11 2.11.95 2.11 2.11-.95 2.11-2.11 2.11zm1.82 12.4H4.39V9h3.64v11.41z"/>
              </svg>
            </a>
            <a href="https://github.com/NileshPatil12" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-current"
              >
                <path d="M12 .3a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58V20.6c-3.34.73-4.04-1.62-4.04-1.62-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.09-.75.09-.75 1.22.08 1.86 1.25 1.86 1.25 1.09 1.86 2.86 1.32 3.55 1 .11-.79.43-1.32.78-1.63-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.24-.12-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23a11.44 11.44 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.63.24 2.83.12 3.13.77.85 1.24 1.92 1.24 3.24 0 4.63-2.81 5.66-5.48 5.96.45.39.85 1.16.85 2.34v3.47c0 .32.21.69.83.57A12 12 0 0012 .3"/>
              </svg>
            </a>
            <a href="https://app.netlify.com/teams/nileshpatil12/overview" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-current"
              >
                <path d="M21.53 12.71l-1.35-.52.53-1.24-3.7-8.36a.29.29 0 00-.51 0l-2.66 5.65-2.19-.87L12 1.69a.28.28 0 00-.48 0L9.22 7.12 4.9 8.43a.3.3 0 000 .57l3.54 1.41-1.57 2.76-3.32-2.6a.3.3 0 00-.47.18L1 17.75a.29.29 0 00.14.3l5.37 2.91 1.18-2.67 2.58 2.03-1.4 3.12a.29.29 0 00.42.34l3.92-2.21 3.38 1.84a.28.28 0 00.4-.19l1.77-7.68a.29.29 0 00-.2-.36zm-9.95-3.3l2.25 1.5-.66 1.42-3.3-2.45.66-1.42 1.05-.64zm1.27-1.54l2.19.88-1.56 3.53-2.24-1.5 1.6-2.91.01.01zm-2.71 2.55l2.58 2.03-2.17 4.83-2.24-4.83 1.83-2.97zm1.29 7.23l2.18-4.72.69 1.4 1.77 1.39-4.64 2.93zm6.95-13.8l3.48 7.87-1.47 3.3-4.13-1.9.66-1.42 1.64-.75.57-.99-.53-1.17-2.59-1.43 1.37-2.71zm-3.13 6.96l1.43-3.25 3.3 1.8-1.6 2.91-1.05.65-2.08-1.11z"/>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by Nilesh</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
