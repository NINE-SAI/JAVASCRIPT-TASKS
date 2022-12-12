// By using inbuilt methods

let pol="bob"
let gol=pol.toString('').split('').reverse().join('')
if(pol===gol){
    console.log("palindrom")
}else{
    console.log("not")
}


// Without using inbuilt methods

let pal = {name:"nmhadahmn"}
let str1= pal.name.length/2
for(i=0;i<=str1;i++){
    if(pal.name[i]==pal.name[pal.name.length-1-i]){
        console.log("pal")
    }else{
        console.log("pol")
    }
}