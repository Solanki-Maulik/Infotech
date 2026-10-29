// class Birds {
//     constructor(name){
//         this.name=name;
//     }


// fly(){
//     console.log(`this ${this.name} is flying`);
// }

// }


// class bigbird extends Birds{
    
//     constructor(name,size){
//         super(name);
//         this.size=size;
//     }
// getsize(){
//     console.log(`this ${this.size} is size`);
// }

// }

// const mybird = new bigbird("Peacock","10");

// mybird.fly();
// mybird.getsize();

// let internet = new Promise((resolve,reject) =>{
//     let inter = true;

//     if(inter){
//         resolve("internet is on");
//     }
//     else{
//         reject("off");
//     }
// });

// let result = await internet

// console.log(result);

const duration = Temporal.Duration.from({hours:1,minutes:30});
console.log(duration.toString());

const person = {
    name : "hello"
};
//meta programming
// Object.defineProperty(person,"name",{ 
//     get(){
//         return "jac";
//     }
// });

// 

//proxy

const proxy = new Proxy(person,{
    set(target, property, value){
        console.log(property +":"+ value);
        return target[property];
    }
});

proxy.name="nice";
console.log(person.name);


function greet(message){
    const time = new Date().toLocaleTimeString();
    console.log("[" + time + "]");  
    return message + "," + this.name;
}

let msg = Reflect.apply(greet,person,["Welcome"]);
 
console.log(msg);

let color = Reflect.construct(Array,[1,2,3]);
console.log(color);
let obj = {"Key1" : "Hi"}

let keys = Reflect.ownKeys(obj);
console.log(keys);