let myArr = ["friend", 22, 22, null, "singing", 55];

const filterBy = (arr, dataType) => {
  let result = arr.filter((item) => typeof item !== dataType);
  return result;
};

console.log(filterBy(myArr, "string"));