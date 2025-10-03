import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../../../generated/prisma";
// import { Prisma, PrismaClient } from '@prisma/client';
// import type { DefaultArgs } from '@prisma/client/runtime/library';

const prismaClientSingleton = () => {
  // prisma logs are too verbose and nobody reads it even on localhost ;)
  return new PrismaClient({ log: ["query"] });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env["NODE_ENV"] !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
