class Player {
    constructor(name, symbol){
        this.name = name;
        this.symbol = symbol;
    }
}

class Board{
    constructor(){
        this.grid = Array.from(Array(3), () => new Array(3).fill(null))
    }
}


[
    ["[0][0]", "[0][1]", "[0][2]"],
    ["[1][0]", "[1][1]", "[1][2]"],
    ["[2][0]", "[2][1]", "[2][2]"]
]