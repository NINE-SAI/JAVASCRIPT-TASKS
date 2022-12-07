// class One{
//     details(){
//       console.log("9SAI")
//     }
// }
// class Two extends One{
//   get_details(){
//     console.log("NINE")
//   }
// }
// let arr = new Two()
// arr.details()
// arr.get_details()

// class One {
//   constructor(){
//     console.log("9SAI")
//   }
// }
// class Two extends One{
//     data(){
//       console.log("NINE")
//     }
// }
// let arr = new Two()
// arr.data()

// class One {
//   data(){
//     console.log("9SAI")
//   }
//   constructor(){
//     console.log("NINE")
//   }
// }
// class Two extends One {
//   add(){
//     console.log("ANIL")
//   }
// }
// let arr = new Two()
// arr.data()
// arr.add()

// class One {
//   constructor(){
//     console.log("9SAI")
//   }
// }
// class Two extends One{
//   constructor(){
//     console.log("NINE")
//   }
// }
// let arr = new Two()

// class One{
//     constructor(){
//       console.log("9SAI")
//     }
//   }
//   class Two extends One{
//     constructor(){
//       super()
//         console.log("NINE")
//     }
//   }
//   let arr = new Two()

// class One {
//     constructor(id,name){
//       this.id = id;
//       this.name = name;
//     }
//   }
//   class Two extends One{
//     constructor(id,name,salary){
//       super (id,name)
//       this.salary = salary;
//     }
//   }
//   let arr1 = new Two(101,"9SAI",45000);
//   let arr2 = new Two(102,"ANIL",40000);
//   console.log(arr1)
//   console.log(arr2)

// class One {
//     constructor(id,name){
//       this.id = id;
//       this,name = name;
//     }
//   }
//   class Two extends One {
//     minus = 1000;
//     constructor (id,name,salary){
//       super(id,name)
//       this.salary = salary
//     }
//     balance(){
//       return this.salary - this.minus
//     }
//   }
//   let arr = new Two (101,"9SAI",45000)
//   console.log(arr.balance())