import React from "react";

export default function Page({ name, id }) {
  return (
    <div>
      id: {id}, name: {name}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
      name: context.params.name,
    },
  };
}
