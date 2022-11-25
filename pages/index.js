export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");

  console.log("res", res);

  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default function Home(props) {
  console.log(props)

  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>{user.id}</li>
      ))}
    </ul>
  );
}
