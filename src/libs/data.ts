import { prisma } from "@/libs/prisma";

const ITEMS_PER_PAGE = 5;

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const contacts = await prisma.contact.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              // mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              // mode: "insensitive",
            },
          },
        ],
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
      orderBy: {
        createdAt: "desc",
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("Failed to fetch contacts data");
  }
};

export const getContactById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id,
      },
    });
    return contact;
  } catch (error) {
    throw new Error("Failed to fetch contacts data");
  }
};

export const getContactPages = async (query: string) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              // mode: "insensitive",
            },
          },
          {
            phone: {
              contains: query,
              // mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to fetch pages data");
  }
};
