// import { getSession } from 'next-auth/react';

// const Profile = ({ session }) => {
//   if (!session) return <p>Access Denied</p>;

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Welcome, {session.user.name}!</p>
//     </div>
//   );
// };

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return {
//     props: { session },
//   };
// }

// export default Profile;








import { useSession, signOut } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return <p>You need to be authenticated to view this page.</p>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

