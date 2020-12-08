// Task 1: Translate the story into code.
const mybirthday = (Sick) => {
     return new Promise ((resolve,reject)=>{
         setTimeout(()=>{
            if(!Sick)
            {
               resolve(2);
            }
            else
            {
                 reject(new Error ("I am sad"));
            }
         },2000);
         
     }

     );
}
console.time("Timer" );

mybirthday(true)
.then((result)=>{
    console.timeLog("Timer");
    console.log(`We prepared ${result} cakes.`);
}).catch((error)=>{
    console.timeLog("Timer");
    console.log(error);
}).finally(()=>
    {
        console.log("We'll have Party");
    });