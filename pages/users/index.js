import Link from "next/link";
import React from "react";

export default function Page({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
}

function UserCard({ user }) {
  return (
    <Link href="/users/[id]" as={`/users/${user.id}`}>
      <a>{user.name}</a>
    </Link>
  );
}

export async function getServerSideProps() {
  const users = await fetch("http://localhost:3000/api/users").then((res) =>
    res.json()
  );

  console.log("serversideprops", users);

  return {
    props: {
      users,
    },
  };
}
