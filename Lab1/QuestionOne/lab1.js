const {Observable, from, of} = rxjs;
const {filter} = rxjs.operators;

let arg = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];

console.log("Using ES6 <---");
//es6 set
let newarr = Array.from(new Set(arg));
console.log(newarr);

function removeDulpicates(){
    return new Promise(function (resolve, reject) {
        let newarr = arg.filter(function (item, pos) {
            return arg.indexOf(item) === pos;
        });
        resolve(newarr);
        let error = new Error("Unexpected Problem");
        reject(error)
    })
}
// Promises
console.log("Using Promise <---");
removeDulpicates().then(value => {console.log(value)}).catch(err => console.log(err));



// Async Await
(async function asyncawait() {
 try{
     let promise = await removeDulpicates();
     console.log("Using Async/Await <---");
     console.log(promise);

 }catch (error) {
     console.log(error);
 }
})();

//Observables
let observable = from(arg).distinct();
observable.subscribe(value => console.log(value));

