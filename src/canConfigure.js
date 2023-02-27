export const canConfigure = (from, to) => {
  if (typeof from !== "string") throw new Error("from must be a string");
  if (typeof to !== "string") throw new Error("to must be a string");

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  const hasUniqueLetters = new Set(from).size === new Set(to).size; // Esto es para saber si tienen el mismo número de letras únicas
  if (!hasUniqueLetters) return false;

  const transformation = {};

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformation[fromLetter]; // Esto es para saber si la letra ya ha sido transformada

    if (storedLetter && storedLetter !== toLetter) return false;
    transformation[fromLetter] = toLetter;
  }
  return true;
};

console.log(canConfigure("XBOX", "XXBO"));
