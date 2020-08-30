export default function orderAlphabeticalData(objectArray, index) {
  return objectArray.sort((objectA, objectB) => {
    return objectA[index] < objectB[index] ? -1 : objectA[index] > objectB[index] ? 1 : 0;
  });
}