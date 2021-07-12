function sumaArray(number: number[]): number {
  return number.reduce((acc, current) => acc + current, 0);
}

const total: number = sumaArray([1,2,3]);

console.log(total);
