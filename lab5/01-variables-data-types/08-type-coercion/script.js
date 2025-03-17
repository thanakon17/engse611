let result = 10 + "5"; // "5" ถูกแปลงเป็นตัวเลข ทำให้ผลลัพธ์เป็น 15 (Number)
console.log(result); // Output: 15
console.log(typeof result); // Output: number

let x = 10;
let y = "10";
console.log(x == y); // "10" ถูกแปลงเป็นตัวเลข ทำให้ผลลัพธ์เป็น true
console.log(x === y); // ตรวจสอบทั้งค่าและประเภท ทำให้ผลลัพธ์เป็น false