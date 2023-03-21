function transformToObjects(numberArray) {
  return numberArray.map((num) => {
    return { val: num };
  });
}

console.log(transformToObjects([1, 2, 3]));
