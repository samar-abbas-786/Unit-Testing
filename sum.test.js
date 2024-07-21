const  sum  = require("./index");
const  fetchData  = require("./index");

// test("add 1 and 2", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("sum is not equal to 0", () => {
//   for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//       expect(sum(i, j)).not.toBe(0);
//     }
//   }
// });

// test("adding floating numbers", () => {
//   const n = 2.1 + 2.5;
//   expect(n).toBeCloseTo(4.6);
// //   expect(n).toBe(4.6);
// });
// test("Match String", () => {
//   let str = "syed";
//   expect(str).toMatch(/ed/);
// });

test('fetching',async ()=>{
    const response=await fetchData();
    const data=await response.json();
    // console.log(data.users);
    const firstname=data.users.map((user)=>user.firstName);
    console.log(firstname);
    expect(firstname).toContain('Emily');
})