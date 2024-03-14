

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
    
    const regex = /\d+/g;
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    return (
      (numbers[0]+numbers[1]).toString()
    );
  }

  if (query.toLowerCase().includes("minus")) {
    
    const regex = /\d+/g;
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    return (
      (numbers[0]-numbers[1]).toString()
    );
  }
  if (query.toLowerCase().includes("multiplied")) {
    
    const regex = /\d+/g;
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    return (
      (numbers[0]*numbers[1]).toString()
    );
  }

  if (query.toLowerCase().includes("power")) {
    
    const regex = /\d+/g;
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    return (
      (numbers[0]**numbers[1]).toString()
    );
  }

  if (query.toLowerCase().includes("divided")) {
    
    const regex = /\d+/g;
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    return (
      (numbers[0]/numbers[1]).toString()
    );
  }

  if (query.toLowerCase().includes("largest")) {
    const regex = /\d+/g; // Corrected regular expression
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    let largest = numbers[0];
    if (numbers.length > 1 && numbers[1] > largest) {
      largest = numbers[1];
    }
    if (numbers.length > 2 && numbers[2] > largest) {
      largest = numbers[2];
    }
    return largest.toString();
  }

  if (query.toLowerCase().includes("square and cube")) {
    const regex = /\d+/g;
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    for (let num of numbers) {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      if (Number.isInteger(sqrt) && Number.isInteger(cbrt)) {
        return num.toString();
      }
    }
  }

  function isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
  }

  if (query.toLowerCase().includes("prime")) {
    const regex = /\d+/g;
    const numbers = [];
    let match;
    while ((match = regex.exec(query)) !== null) {
      numbers.push(parseInt(match[0], 10));
    }
    for (let num of numbers) {
      if (isPrime(num)) {
        return num.toString();
      }
    }
  }



  return "";
}
