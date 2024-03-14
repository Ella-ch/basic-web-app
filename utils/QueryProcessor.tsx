export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "My andrewID is xinyic2."
    );
  }

  if (query.toLowerCase().includes("What is your name?")) {
    return (
      "Xinyi2"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.split(" ").map(Number);
    return (
      numbers[0]+numbers[1].toString()
    );
  }


  return "";
}
