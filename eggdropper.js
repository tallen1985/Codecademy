const minEggDropper = () => {
    const criticalFloor = Math.floor(Math.random() * 100) + 1;

    let eggsRemaining = 4;
    let maxFloor = 100;
    let minFloor = 1;
    let currentFloor = 50;
    let minDrops100 = 0;

    while(eggsRemaining > 0 && currentFloor !== criticalFloor) {
        console.log(`Current Range is (${minFloor}, ${maxFloor})`);
        if(currentFloor > criticalFloor) {
            maxFloor = currentFloor;
            eggsRemaining--;
            console.log(`Egg broke: Eggs Remaining ${eggsRemaining}`)
        } else {
            minFloor = currentFloor;
            console.log(`Egg survived: Eggs Remaining ${eggsRemaining}`)
        }
        currentFloor = Math.floor(((maxFloor - minFloor) / 2) + minFloor);
        minDrops100++;
        
    };

    if(criticalFloor === currentFloor) {
        console.log(`Critical Floor is: ${currentFloor}`);
    } else {
        console.log(`Ran out of eggs`);
    };
    return minDrops100;
}
console.log(`Amount of Drops needed: ${minEggDropper()}`);