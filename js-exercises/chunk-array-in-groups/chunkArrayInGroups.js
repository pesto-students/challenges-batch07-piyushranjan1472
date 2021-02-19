function chunkArrayInGroups(array, chunkSize) {
  return array.map((x, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize)).filter(String);
}

export {
  chunkArrayInGroups,
};
