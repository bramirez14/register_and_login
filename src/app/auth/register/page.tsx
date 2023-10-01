import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

const RegisterPage: NextPage = () => {
  return <div></div>
};
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { query } = context;
//   const session = await getSession(context);
  

//   const { p = "/" } = query;

//   if (session ) {
//     return {
//       redirect: {
//         destination: p.toString(),
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

export default RegisterPage;
