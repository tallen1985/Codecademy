//create arrays to be populated with messages
var nickname = ['Chief', 'Ace', 'Bud', "Guv'na", 'Champ', 'Honorable Sir'];
var noun = ['brewski', 'tennis racket', 'kayak', 'car keys'];
var activity = ['drinking', 'fishing', 'hiking', 'for a drive', 'on an adventure'];

//randomization
function randomize(num){
    return Math.floor(Math.random() * num);
};

//function to actually make the message
function createMessage(name, noun, activity){
    let message = "Hey ";
    message += name[randomize(name.length)] + ", grab your ";
    message += noun[randomize(noun.length)] + ", we're going ";
    message += activity[randomize(activity.length)] + ".";
    return message;
}

//call function
console.log(createMessage(nickname,noun, activity));