import { prisma } from "../../prisma/client";

export default async function handler(req, res) {
  const users = await prisma.users.findMany();

  console.log(users);

  res.status(200).json(users);
}
