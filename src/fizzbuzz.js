export const fizzbuzz = (number) => {
  if (typeof number !== "number") {
    throw new Error("The parameter must be a number");
  }
  if (Number.isNaN(number)) {
    throw new Error("The parameter must be a number");
  }
  if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else {
    return number;
  }
};
