let args=process.argv;

let res=0

for(let i=2;i<args.length;i++){
    res=Number(args[i])-res
}
console.log(res);