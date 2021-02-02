var nickname = ['Chief', 'Ace', 'Bud', "Guv'na", 'Champ', 'Honorable Sir'];
var noun = ['brewski', 'tennis racket', 'kayak', 'car keys'];
var activity = ['drinking', 'fishing', 'hiking', 'for a drive', 'on an adventure'];

function randomize(num){
    return Math.floor(Math.random() * num);
};

function createMessage(name, noun, activity){
    let message = "Hey ";
    message += name[randomize(name.length)] + ", grab your ";
    message += noun[randomize(noun.length)] + ", we're going ";
    message += activity[randomize(activity.length)] + ".";
    return message;
}

console.log(createMessage(nickname,noun, activity));