import { PrismaClient } from "@prisma/client";

// This weird code prevents the "Too many connections" error
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;