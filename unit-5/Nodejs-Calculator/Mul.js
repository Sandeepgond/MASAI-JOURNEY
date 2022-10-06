let args=process.argv;

let res=1

for(let i=2;i<args.length;i++){
    res=res*Number(args[i])
}
console.log(res);