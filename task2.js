// Task 2: Create a guessing game.

// User story: User can enter a number
// User story: The system pick a random number from 1 to 6
// User story: If user number is equal to a random number, give user 2 points
// User story: If the user number is different from the random number by 1,
// give the user 1 point, otherwise, give the user 0 points.
// User story: User can decide to play the game as long as they want to

const Numberuser =() =>
{
    return new Promise((resolve,reject)=>
    {
        const usernum = Number(window.prompt("Enter a number from 1 to 6 : " ));
        const randnum = Math.floor(Math.random() * 6 + 1);
        console.log(randnum);

        if(isNaN(usernum))
        {
            reject(new Error('Wrong input type'));
        }

        if(usernum===randnum)
        {
            resolve(
                {
                    points:2,
                    randnum,
                });
        }
        else if(usernum===randnum+1||usernum===randnum-1)
        {
            resolve(
                {
                    points:1,
                    randnum,
                }
            );
        }
        else{
            resolve(
                {
                    points:0,
                    randnum,
                }
            );
        }
    });
};


const continuer = ()=>
{
    return new Promise((resolve,reject)=>
    {
          if(window.confirm("Do you want to continue"))
          {
              resolve(true);
          }
          else
          {
              resolve(false);
          }
    });
};

const handleguess = ()=>
{
    Numberuser().then((result)=>
    {
        alert(`Dice : ${result.randnum} you got ${result.points} points`);

        continuer().then((result)=>
        {
            if(result)
            {
                handleguess();
            }
            else
            {
                alert( `Game ends!!`);
            }

        });
    }).catch((error) => alert(error));
};



const handleguess_v2 = async ()=>
{
    
    try{

        const result = await Numberuser();
        alert(`Dice : ${result.randnum} you got ${result.points} points`);
         const cont = await continuer();
              if(cont)
                 {
                    handleguess_v2();
                 }
               else
                {
                  alert(`Game ends!!`);
                }

    }
    catch(error)
    {
        alert(error);
    }
  
}

const start = () => {
   //handleguess();
    handleguess_v2();
};

start();

