let a = [23,32,48,55,63,71,84,90]
let b = []
let c = []
for(i=0;i<a.length;i=i+1){
    if(a[i]%2==0){
        b.push(a[i])
    }
    else{
        c.push(a[i])
    }
}
console.log(b)                  // FOR EVEN
console.log(c)                  // FRO ODD