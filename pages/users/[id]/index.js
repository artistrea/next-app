import React from "react";

export default function Page({ id }) {
  return <div>id: {id}</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}
