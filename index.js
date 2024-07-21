function sum(a, b) {
  return a + b;
}
module.exports = sum;

async function fetchData() {
  const data = await fetch("https://dummyjson.com/users");
  return data;
}
  module.exports=fetchData;