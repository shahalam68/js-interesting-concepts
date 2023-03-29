function welcomeMessage(greetHandler){
    console.log(greetHandler);
    greetHandler();
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise']
// const myOBJ = {name: 'Tom Chinku', age: 11};

function greedMorning(){
    console.log('Good morning');
}


welcomeMessage(greedMorning);