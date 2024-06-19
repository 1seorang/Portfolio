// import type { GetServerSideProps, NextPage } from 'next';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const req = context.req;
//   const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
//   console.log(`Client IP: ${ip}`);

//   return {
//     props: {}, // props yang dikirim ke komponen React

//   }
// };

// const HomeServer: NextPage = () => {

//   return (
//     <div>
//       <span> 2024 </span>
//     </div>
//   );
// };

// export default HomeServer;


// import { LoaderFunction, json } from 'next/app';

// export const loader: LoaderFunction = async ({ request }) => {
//   const ip = request.headers.get('x-forwarded-for') || request.socket.remoteAddress;
//   console.log(`Client IP: ${ip}`); // Ini akan mencetak di server

//   return json({ clientIp: ip });
// };

// export default function Page({ data }) {
//   return (
//     <div>
//       <h1>Client IP: {data.clientIp}</h1>
//     </div>
//   );
// }