const deepCopyObject = objToCopy => {
  const outObject = {};
  if (typeof objToCopy !== 'object' || objToCopy === null) {
    return objToCopy;
  }
  for (const key in objToCopy) {
    if (key in objToCopy) {
      const value = objToCopy[key];
      outObject[key] = deepCopyObject(value);
    }
  }
  return outObject;
};

export { deepCopyObject };
