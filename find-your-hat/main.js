const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let playingGame = true;

class Field {
    constructor(field){
        this._field = field;
        this.x = 0;
        this.y = 0;
    }

    get field(){
        return this._field;
    }

    print() {
        for(let i = 0; i < this.field.length; i++){
            console.log(this.field[i].join(''));
        }
    }

    static generateField(rows, cols){
        let tempField = [];
        
        
        let randomizeBlock = function(){
            let randNum = Math.random();
            if (randNum < .15) {
                return hole;
            } else {
                return fieldCharacter;
            }
        }


        for( let r = 0; r < rows; r++) {
            let tempRow = [];
            for( let c = 0; c < cols; c++){
                  tempRow.push(randomizeBlock());   
            }
            tempField.push(tempRow);
        }
        tempField[Math.floor(Math.random()* rows)][Math.floor(Math.random()* cols)] = fieldCharacter;
        tempField[Math.floor(Math.random()* rows)][Math.floor(Math.random()* cols)] = hat;

        return tempField;
        
    }
}

function move(){
    console.log('W for up, S for Down, D for right, A for left.')
    let choice = prompt('Which direction bud?');
    switch(choice.toLowerCase()) {
        case 'w':
            console.log('Moving Up');
            myField.field[myField.x][myField.y] = fieldCharacter;
            myField.x--;
            break;
        case 's':
            console.log('Moving Down');
            myField.field[myField.x][myField.y] = fieldCharacter;
            myField.x++;
            break;
        case 'd':
            console.log('Moving Right');
            myField.field[myField.x][myField.y] = fieldCharacter;
            myField.y++;
            break;
        case 'a':
            console.log('Moving Left');
            myField.field[myField.x][myField.y] = fieldCharacter;
            myField.y--;
            break;
        default:
            console.log('Invalid Input');
            break;

    }

}


function playGame(rows, cols){
    console.log('Find Your Hat!');
    console.log('The goal is get your icon (*) to the hat (^) without falling into the holes (0)');
    do{
        if((myField.x >= 0 && myField.x < rows) && (myField.y >= 0 && myField.y < cols))
        {
            checkMove(myField.x, myField.y);
        } else {
            console.log('Cannot move outside of playing field');
            move();
        }
    } while (playingGame == true);
}
function checkMove(x, y){
    if (myField.field[x][y] == hole){
        console.log('You fell in a hole! Game over!');
        playingGame = false;
    } else if (myField.field[x][y] == hat){
            myField.field[myField.x][myField.y] = pathCharacter;
            console.log('You Win!');
            playingGame = false;
    } else {
    
        myField.field[myField.x][myField.y] = pathCharacter;
        myField.print();
        move();
    }
}

let rows = 8;
let cols = 10;
const newField = Field.generateField(rows, cols);
let myField = new Field(newField);

playGame(rows, cols);

