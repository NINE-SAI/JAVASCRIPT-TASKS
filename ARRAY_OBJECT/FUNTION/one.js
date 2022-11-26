const a = [
            {id:101,name:"9SAI",age:22},
            {id:101,name:"KIRAN",age:32},
            {id:101,name:"OMMMM",age:72},
            {id:101,name:"CHANDU",age:30},
            {id:101,name:"LOKESH",age:12},
          ]
const b = a.filter(function (a){
    return a.age < 30
})
console.log(b)