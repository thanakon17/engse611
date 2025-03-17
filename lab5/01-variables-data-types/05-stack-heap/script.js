function add(a, b) { // Function Call Stack จะถูกเพิ่มเข้าไปใน Stack
    let sum = a + b; // ตัวแปร sum จะถูกจัดเก็บใน Stack
    return sum;
  }
  
  let result = add(5, 10); // ตัวแปร result จะถูกจัดเก็บใน Stack
  console.log(result); // 15
  
  let person = { // Object person จะถูกจัดเก็บใน Heap
    name: "John",
    age: 30
  };
  
  let numbers = [1, 2, 3, 4, 5]; // Array numbers จะถูกจัดเก็บใน Heap