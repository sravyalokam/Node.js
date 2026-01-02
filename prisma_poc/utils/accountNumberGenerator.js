import prisma from "../bankingClient.js";

export function generateAccountNumber() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  const datePart = `${year}${month}${day}`;
  const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  return `ACC${datePart}${randomPart}`;
}