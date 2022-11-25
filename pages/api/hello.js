// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma } from "../../prisma/client";



export default async function handler(req, res) {
  const user = await prisma.users.create({
    data: {
      name: "John Doe",
      email: "avaaa@ava",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
  });

  const users = [user];

  res.status(200);
  console.log("req.");
  res.json(users);
}
