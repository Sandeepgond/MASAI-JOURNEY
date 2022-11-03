const nameVariable:string="sandeep"
const age:number=1
const isFetching:boolean=true
const d:null=null
const e:undefined=undefined

const f:Array<number>=[1,2,34]
const f1:number[]=[1,2,3,4]

const f2:Array<string>=["A","B","C"]
const f3:string[]=["A","BCDEFGH","CDEFGHIJ"]


let g:number|string
g=1
g="ashish"

const h:Array<number | string>=[1.5,"sandeep",2,"gond"]
// const h1:<number | string>[]=[1.5,"sandeep",2,"gond"]


const h2:Array<Array<number|string>>=[
    [1,"ASDFF"],
    [2,"ADADFG"],
    [3,"fgfdhfghhddfg"]
]

///tuple in typescript //when you want to limit the data
const h3:[number,string]=[1,"sandeep"]
const h4:Array<[number,string]>=[
    [2,"asffdh"],
    // [4,"dsfdf","fhsfh"]
]

const i1:Array<Object>=[
    {id:1,name:"SAndeep",employee:true,age:21},
    {id:2,name:"SAndeep",employee:true,age:21},
    {id:3,name:"SAn",employee:false,age:21}
]
const i2:Array<{
    id:number;
    name:string;
    employee:boolean
}>=[
    {id:1,name:"SAndeep",employee:true,},
    {id:2,name:"SAndeep",employee:true,},
    {id:3,name:"SAn",employee:false,}
]

/// ? is used for optional keys in type script
const i3:Array<{
    id:number;
    name:string;
    employee:boolean;
    age?:{
        value:number
    }
}>=[
    {id:1,name:"SAndeep",employee:true,age:{value:2}},
    {id:2,name:"SAndeep",employee:true,},
    {id:3,name:"SAn",employee:false,}
]
i3[0].age?.value


// const k:Record<string,boolean>={
//     loading:true,
//     error:false,
//     succes:true,
// }
// const k1:Record<string,number[]>={
//     tasks:[1,2,3],
//     posts:[4,5,6]
// }

// /// array of specific string
// const l:Array<"INDIA"|"US"|"CHINA">=[
//     "INDIA",
//     "US",
//     "CHINA",
//     // "china"
// ]
// type Country="INDIA"|"US"|"CHINA"
// const l1:Array<Country>=[
//     "INDIA",
//     "US",
//     "CHINA",
//     // "china"
// ]



// type GENDER="Male"|"Female"|"Others"
// type User={
//     name:string,
//     age:number,
//     gender:GENDER
// }

// const m:Array<User>=[
//     {name:"Sande",age:34,gender:"Male"},
//     {name:"Sandi",age:34,gender:"Female"},
//     {name:"phool",age:34,gender:"Others"}
// ]

const add=(a:number,b:number):number=>a+b
add(1,2)
// add("fdsf",2)

const prod=(x:number,y:number):number=>x+y
prod(5,10)

const divide=(x:number,y:number):number=>x/y
divide(10,2)


const Print=(b:string):void=>{
    console.log(b)
}
Print("Hello Type Script") /// it will return void 