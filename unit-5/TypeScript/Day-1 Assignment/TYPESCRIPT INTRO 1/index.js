var _a;
var nameVariable = "sandeep";
var age = 1;
var isFetching = true;
var d = null;
var e = undefined;
var f = [1, 2, 34];
var f1 = [1, 2, 3, 4];
var f2 = ["A", "B", "C"];
var f3 = ["A", "BCDEFGH", "CDEFGHIJ"];
var g;
g = 1;
g = "ashish";
var h = [1.5, "sandeep", 2, "gond"];
// const h1:<number | string>[]=[1.5,"sandeep",2,"gond"]
var h2 = [
    [1, "ASDFF"],
    [2, "ADADFG"],
    [3, "fgfdhfghhddfg"]
];
///tuple in typescript //when you want to limit the data
var h3 = [1, "sandeep"];
var h4 = [
    [2, "asffdh"],
    // [4,"dsfdf","fhsfh"]
];
var i1 = [
    { id: 1, name: "SAndeep", employee: true, age: 21 },
    { id: 2, name: "SAndeep", employee: true, age: 21 },
    { id: 3, name: "SAn", employee: false, age: 21 }
];
var i2 = [
    { id: 1, name: "SAndeep", employee: true },
    { id: 2, name: "SAndeep", employee: true },
    { id: 3, name: "SAn", employee: false }
];
/// ? is used for optional keys in type script
var i3 = [
    { id: 1, name: "SAndeep", employee: true, age: { value: 2 } },
    { id: 2, name: "SAndeep", employee: true },
    { id: 3, name: "SAn", employee: false }
];
(_a = i3[0].age) === null || _a === void 0 ? void 0 : _a.value;
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
var add = function (a, b) { return a + b; };
add(1, 2);
// add("fdsf",2)
var prod = function (x, y) { return x + y; };
prod(5, 10);
var divide = function (x, y) { return x / y; };
divide(10, 2);
var Print = function (b) {
    console.log(b);
};
Print("Hello Type Script"); /// it will return void 
