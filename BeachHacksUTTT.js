
var numberofimages = 6;
var wins = " Wins!"
var imgnumber = -1;
var currentPlayer;
var player1color = '#ff0000';
var player2color = '#0000ff';
var Player1Image = 'Xes.png';
var player2image = 'Oes.png';
var p1 = "Player 1";
var p2 = "Player 2";
var p1Name = "Player 1";
var p2Name = "Player 2";
var currentPlayersImage;

var OneWon = false;
var TwoWon = false;
var ThreeWon = false;
var FourWon = false;
var FiveWon = false;
var SixWon = false;
var SevenWon = false;
var EightWon = false;
var NineWon = false;

var OneWinner = "contested";
var TwoWinner = "contested";
var ThreeWinner = "contested";
var FourWinner = "contested";
var FiveWinner = "contested";
var SixWinner = "contested";
var SevenWinner = "contested";
var EightWinner = "contested";
var NineWinner = "contested";
var GameWinner = "contested";

var OnePositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var TwoPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var ThreePositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var FourPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var FivePositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var SixPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var SevenPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var EightPositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var NinePositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var MetaGamePositions = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var currentPlayerColor;
var firstTurn = true;
var imagelength;
var firstish = true;
var ValidSquares = [];
var OneSquares = ['a11id', 'a21id', 'a31id', 'b11id', 'b21id', 'b31id', 'c11id', 'c21id', 'c31id'];
var TwoSquares = ['a12id', 'a22id', 'a32id', 'b12id', 'b22id', 'b32id', 'c12id', 'c22id', 'c32id'];
var ThreeSquares = ['a13id', 'a23id', 'a33id', 'b13id', 'b23id', 'b33id', 'c13id', 'c23id', 'c33id'];
var FourSquares = ['a14id', 'a24id', 'a34id', 'b14id', 'b24id', 'b34id', 'c14id', 'c24id', 'c34id'];
var FiveSquares = ['a15id', 'a25id', 'a35id', 'b15id', 'b25id', 'b35id', 'c15id', 'c25id', 'c35id'];
var SixSquares = ['a16id', 'a26id', 'a36id', 'b16id', 'b26id', 'b36id', 'c16id', 'c26id', 'c36id'];
var SevenSquares = ['a17id', 'a27id', 'a37id', 'b17id', 'b27id', 'b37id', 'c17id', 'c27id', 'c37id'];
var EightSquares = ['a18id', 'a28id', 'a38id', 'b18id', 'b28id', 'b38id', 'c18id', 'c28id', 'c38id'];
var NineSquares = ['a19id', 'a29id', 'a39id', 'b19id', 'b29id', 'b39id', 'c19id', 'c29id', 'c39id'];


// 12-20-18
//this is not yet connected
// 12-20-18 probably can't be broken up any further
function changePlayer(current) {
    console.log("changePlayer");
    if (current == p1) {
        currentPlayer = p2;
        currentPlayerColor = player2color;
        currentPlayersImage = player2image;
        document.getElementById("commentoggle").style.opacity = "0.35";
        document.getElementById("commentoggle2").style.opacity = "0.85";
    } else {
        currentPlayer = p1;
        currentPlayerColor = player1color;
        currentPlayersImage = Player1Image;
        document.getElementById("commentoggle").style.opacity = "0.85";
        document.getElementById("commentoggle2").style.opacity = "0.35";
    }
}

// 12-20-18 probably can't be broken up any further
function initialGameCondition() {
    console.log("ntalGameCondton");
    currentPlayer = p1;
    currentPlayerColor = player1color;
    currentPlayersImage = Player1Image;
    document.getElementById("commentoggle").style.opacity = "0.85";
    document.getElementById("commentoggle2").style.opacity = "045";
    ValidSquares = ['a11id', 'a12id', 'a13id', 'a14id', 'a15id', 'a16id', 'a17id', 'a18id', 'a19id',
        'a21id', 'a22id', 'a23id', 'a24id', 'a25id', 'a26id', 'a27id', 'a28id', 'a29id',
        'a31id', 'a32id', 'a33id', 'a34id', 'a35id', 'a36id', 'a37id', 'a38id', 'a39id',
        'b11id', 'b12id', 'b13id', 'b14id', 'b15id', 'b16id', 'b17id', 'b18id', 'b19id',
        'b21id', 'b22id', 'b23id', 'b24id', 'b25id', 'b26id', 'b27id', 'b28id', 'b29id',
        'b31id', 'b32id', 'b33id', 'b34id', 'b35id', 'b36id', 'b37id', 'b38id', 'b39id',
        'c11id', 'c12id', 'c13id', 'c14id', 'c15id', 'c16id', 'c17id', 'c18id', 'c19id',
        'c21id', 'c22id', 'c23id', 'c24id', 'c25id', 'c26id', 'c27id', 'c28id', 'c29id',
        'c31id', 'c32id', 'c33id', 'c34id', 'c35id', 'c36id', 'c37id', 'c38id', 'c39id'
    ]
    // var css = '.grid-item:hover \{background-color: red;}';
    // var style = document.createElement('style');
    //     style.styleSheet.cssText = css;
    // document.getElementsByTagName('head')[0].appendChild(style);
}

// 12-20-18 probably can't be broken up any further
function winConverter(winner) {
    console.log("wnConverter");
    if (winner == p1) { return p1Name; }
    else { return p2Name; }
}



// 12-20-18 probably can't be broken up any further
function colorChange(GridItem) {
    console.log("colorChange");
    // console.log(ValidSquares);
    var enemycolor;
    if (ValidSquares.includes(GridItem) == true) {
        // document.getElementById('art').style.backgroundColor = "#ff0000";
        if (currentPlayer == p1) {
            document.getElementById(GridItem).style.backgroundColor = player1color;
            enemycolor = player2color;
        }
        else {
            document.getElementById(GridItem).style.backgroundColor = player2color;
            enemycolor = player1color;
        }

        var bigGrid = "g" + GridItem.substr(0, 2);
        // console.log(bigGrid);
        switch (bigGrid) {
            case "ga1":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "ga2":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "ga3":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "gb1":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "gb2":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "gb3":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "gc1":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "gc2":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

            case "gc3":
                document.getElementById(bigGrid).style.backgroundColor = enemycolor;

        }
    }


}

// 12-20-18 probably can't be broken up any further
function metaChecker(winner, index) {
    console.log("metaChecer");
    MetaGamePositions.splice(index, 1, winner);
    placementCheck(MetaGamePositions, winner, 9);
}

// 12-20-18 can probably be broken up
function placementCheck(grid, winner, metaplace) {
    console.log("placementChec");
    // console.log(winner);
    if (winner == "1") { currentPlayerColor = player1color }
    else { currentPlayerColor = player2color }
    // console.log("you made it this far");
    if (grid[0] != 0) {
        if (grid[0] == 1) {
            if (grid[1] == 1 && grid[2] == 1 || grid[3] == 1 && grid[6] == 1 || grid[4] == 1 && grid[8] == 1) {
                winner = p1;
                if (metaplace == 9) {
                    GameWinner = winner;
                    var winter = winConverter(winner);
                    console.log(winner + wins);
                    document.getElementById("GameBoard").style.display = "none";
                    var t = document.createTextNode(winter + wins);      // Create a text node
                    document.getElementById("Victor").appendChild(t);
                    document.getElementById("Victor").style.display = "block";
                    return;
                }
                metaChecker(1, metaplace);
                if (metaplace == 0) { document.getElementById("a111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 1) { document.getElementById("b111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 2) { document.getElementById("c111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 3) { document.getElementById("a211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 4) { document.getElementById("b211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 5) { document.getElementById("c211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 6) { document.getElementById("a311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 7) { document.getElementById("b311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 8) { document.getElementById("c311id").style.backgroundColor = currentPlayerColor; return; }

            }
        }
        else if (grid[0] == 2) {
            if (grid[1] == 2 && grid[2] == 2 || grid[3] == 2 && grid[6] == 2 || grid[4] == 2 && grid[8] == 2) {
                winner = p2;
                if (metaplace == 9) {
                    GameWinner = winner;
                    console.log(winner + wins);
                    var winter = winConverter(winner);
                    document.getElementById("GameBoard").style.display = "none";
                    var t = document.createTextNode(winter + wins);      // Create a text node
                    document.getElementById("Victor").appendChild(t);
                    document.getElementById("Victor").style.display = "block";
                    return;
                }
                metaChecker(2, metaplace);
                if (metaplace == 0) { document.getElementById("a111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 1) { document.getElementById("b111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 2) { document.getElementById("c111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 3) { document.getElementById("a211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 4) { document.getElementById("b211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 5) { document.getElementById("c211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 6) { document.getElementById("a311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 7) { document.getElementById("b311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 8) { document.getElementById("c311id").style.backgroundColor = currentPlayerColor; return; }
            }
            else {
                console.log("fuck you have a problem!")

            }
        }
    }
    if (grid[4] != 0) {
        if (grid[4] == 1) {
            if (grid[1] == 1 && grid[7] == 1 || grid[3] == 1 && grid[5] == 1 || grid[6] == 1 && grid[2] == 1) {
                winner = p1;
                if (metaplace == 9) {
                    GameWinner = winner;
                    console.log(winner + wins);
                    var winter = winConverter(winner);
                    document.getElementById("GameBoard").style.display = "none";
                    var t = document.createTextNode(winter + wins);      // Create a text node
                    document.getElementById("Victor").appendChild(t);
                    document.getElementById("Victor").style.display = "block";

                    return;
                }
                metaChecker(1, metaplace);
                if (metaplace == 0) { document.getElementById("a111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 1) { document.getElementById("b111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 2) { document.getElementById("c111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 3) { document.getElementById("a211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 4) { document.getElementById("b211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 5) { document.getElementById("c211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 6) { document.getElementById("a311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 7) { document.getElementById("b311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 8) { document.getElementById("c311id").style.backgroundColor = currentPlayerColor; return; }
            }
        }
        if (grid[4] == 2) {
            if (grid[1] == 2 && grid[7] == 2 || grid[3] == 2 && grid[5] == 2 || grid[6] == 2 && grid[2] == 2) {
                winner = p2;
                if (metaplace == 9) {
                    GameWinner = winner;
                    console.log(winner + wins);
                    var winter = winConverter(winner);
                    document.getElementById("GameBoard").style.display = "none";
                    var t = document.createTextNode(winter + wins);      // Create a text node
                    document.getElementById("Victor").appendChild(t);
                    document.getElementById("Victor").style.display = "block";
                    return;
                }
                metaChecker(2, metaplace);
                if (metaplace == 0) { document.getElementById("a111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 1) { document.getElementById("b111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 2) { document.getElementById("c111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 3) { document.getElementById("a211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 4) { document.getElementById("b211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 5) { document.getElementById("c211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 6) { document.getElementById("a311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 7) { document.getElementById("b311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 8) { document.getElementById("c311id").style.backgroundColor = currentPlayerColor; return; }
            }
            else { console.log("fuck you have a problem!") }
        }
    }
    if (grid[8] != 0) {
        if (grid[8] == 1) {
            if (grid[6] == 1 && grid[7] == 1 || grid[2] == 1 && grid[5] == 1) {
                winner = p1;
                if (metaplace == 9) {
                    GameWinner = winner;
                    console.log(winner + wins);
                    var winter = winConverter(winner);
                    document.getElementById("GameBoard").style.display = "none";
                    var t = document.createTextNode(winter + wins);      // Create a text node
                    document.getElementById("Victor").appendChild(t);
                    document.getElementById("Victor").style.display = "block";
                    return;
                }
                metaChecker(1, metaplace);
                if (metaplace == 0) { document.getElementById("a111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 1) { document.getElementById("b111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 2) { document.getElementById("c111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 3) { document.getElementById("a211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 4) { document.getElementById("b211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 5) { document.getElementById("c211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 6) { document.getElementById("a311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 7) { document.getElementById("b311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 8) { document.getElementById("c311id").style.backgroundColor = currentPlayerColor; return; }
            }
        }
        else if (grid[8] == 2) {
            if (grid[6] == 2 && grid[7] == 2 || grid[2] == 2 && grid[5] == 2) {
                winner = p2;
                if (metaplace == 9) {
                    GameWinner = winner;
                    console.log(winner + " wins!");
                    var winter = winConverter(winner);
                    document.getElementById("GameBoard").style.display = "none";
                    var t = document.createTextNode(winter + wins);      // Create a text node
                    document.getElementById("Victor").appendChild(t);
                    document.getElementById("Victor").style.display = "block";

                    return;
                }
                metaChecker(2, metaplace);
                if (metaplace == 0) { document.getElementById("a111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 1) { document.getElementById("b111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 2) { document.getElementById("c111id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 3) { document.getElementById("a211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 4) { document.getElementById("b211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 5) { document.getElementById("c211id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 6) { document.getElementById("a311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 7) { document.getElementById("b311id").style.backgroundColor = currentPlayerColor; return; }
                if (metaplace == 8) { document.getElementById("c311id").style.backgroundColor = currentPlayerColor; return; }
            }
            else { console.log("you") }
        }
    }
    // console.log(winner);


}

// 12-20-18 can probably be broken up
function victoryCheck(Grid, newestMove) {
    console.log("vctoryChec");
    var intPlayer;
    if (currentPlayer == p1) { intPlayer = 2; }
    else { intPlayer = 1; }
    // console.log(Grid);
    var smallGrid = newestMove.substr(0, 2);
    var intPlace;
    switch (smallGrid) {
        case "a1":
            //0
            intPlace = 0;
            break;
        case "b1":
            //1
            intPlace = 1;
            break;
        case "c1":
            //2
            intPlace = 2;
            break;
        case "a2":
            //3
            intPlace = 3;
            break;
        case "b2":
            //4
            intPlace = 4;
            break;
        case "c2":
            //5
            intPlace = 5;
            break;
        case "a3":
            //6
            intPlace = 6;
            break;
        case "b3":
            //7
            intPlace = 7;
            break;
        case "c3":
            //8
            intPlace = 8;
            break;
        default: break;
    }
    var bigGrid = newestMove.substr(2, 4);
    // console.log(bigGrid);

    switch (bigGrid) {
        case "1id":
            OnePositions.splice(intPlace, 1, intPlayer);
            if (OneWinner == "contested") {
                placementCheck(OnePositions, OneWinner, 0);
            }
            break;
        case "2id":
            TwoPositions.splice(intPlace, 1, intPlayer);
            if (TwoWinner == "contested") {
                placementCheck(TwoPositions, TwoWinner, 1);
            }
            break;
        case "3id":
            ThreePositions.splice(intPlace, 1, intPlayer);
            if (ThreeWinner == "contested") {
                placementCheck(ThreePositions, ThreeWinner, 2);
            }
            break;
        case "4id":
            FourPositions.splice(intPlace, 1, intPlayer);
            if (FourWinner == "contested") {
                placementCheck(FourPositions, FourWinner, 3);
            }
            break;
        case "5id":
            FivePositions.splice(intPlace, 1, intPlayer);
            if (FiveWinner == "contested") {
                placementCheck(FivePositions, FiveWinner, 4);
            }
            break;
        case "6id":
            SixPositions.splice(intPlace, 1, intPlayer);
            if (SixWinner == "contested") {
                placementCheck(SixPositions, SixWinner, 5);
            }
            break;
        case "7id":
            SevenPositions.splice(intPlace, 1, intPlayer);
            if (SevenWinner == "contested") {
                placementCheck(SevenPositions, SevenWinner, 6);
            }
            break;
        case "8id":
            EightPositions.splice(intPlace, 1, intPlayer);
            if (EightWinner == "contested") {
                placementCheck(EightPositions, EightWinner, 7);
            }
            break;
        case "9id":
            NinePositions.splice(intPlace, 1, intPlayer);
            if (NineWinner == "contested") {
                placementCheck(NinePositions, NineWinner, 8);
            }
            break;
        default: Console.log(bigGrid);
    }

    // if (index !== -1) {
    //     items[index] = 1010;
    // }
}

// 12-20-18 probably can't be broken up any further
function colorLeave(GridItem) {
    console.log("colorLeave");
    document.getElementById("ga1").style.backgroundColor = "transparent";
    document.getElementById("ga2").style.backgroundColor = "transparent";
    document.getElementById("ga3").style.backgroundColor = "transparent";
    document.getElementById("gb1").style.backgroundColor = "transparent";
    document.getElementById("gb2").style.backgroundColor = "transparent";
    document.getElementById("gb3").style.backgroundColor = "transparent";
    document.getElementById("gc1").style.backgroundColor = "transparent";
    document.getElementById("gc2").style.backgroundColor = "transparent";
    document.getElementById("gc3").style.backgroundColor = "transparent";
    // document.getElementById('art').style.backgroundColor = "#ff0000";
    document.getElementById(GridItem).style.backgroundColor = "transparent";
}

// 12-20-18 can probably be broken up
function reValidate(grid, secondPart) {
    console.log("reValdate");
    console.log("time to revalidate");
    var playerInt;
    var firstPart;
    var wholeThing;
    var otherPlayer;
    if (currentPlayer == p1) { playerInt = 1; otherPlayer = p2 }
    else { playerInt = 2; otherPlayer = p1 }
    for (i = 0; i < 9; i++) {
        if (grid[i] == playerInt) {
            switch (i) {
                case 0:
                    firstPart = "a1";
                    break;
                case 1:
                    firstPart = "b1";
                    break;
                case 2:
                    firstPart = "c1";
                    break;
                case 3:
                    firstPart = "a2";
                    break;
                case 4:
                    firstPart = "b2";
                    break;
                case 5:
                    firstPart = "c2";
                    break;
                case 6:
                    firstPart = "a3";
                    break;
                case 7:
                    firstPart = "b3";
                    break;
                case 8:
                    firstPart = "c3";
                    break;
                default:
                    firstPart = "nope";
                    break;
            }
        }
        if (firstPart != "undefined") {
            wholeThing = firstPart + secondPart;
            ValidSquares.push(wholeThing);
        }
    }
    console.log("available moves after reValidate " + ValidSquares.length);
    console.log(ValidSquares);
    var invalidSquares = ValidSquares[8].substr(0, 5);
    console.log(invalidSquares);
    if (invalidSquares == "undef") {
        GameWinner = otherPlayer;
        console.log(otherPlayer + wins);
        document.getElementById("GameBoard").style.display = "none";
        var t = document.createTextNode(otherPlayer + wins);      // Create a text node
        document.getElementById("Victor").appendChild(t);
        document.getElementById("Victor").style.display = "block";

    }
    if (currentPlayer == p1) {
        currentPlayer = p2;
    }
    else { currentPlayer = p1; }
    console.log(currentPlayer);
}

// 12-20-18 can probably be broken up
function makeMove(GridItem) {
    console.log("maeMove");
    //if the selected item is a valid choice then...
    if (ValidSquares.includes(GridItem)) {
        //empty valid choices
        ValidSquares = [];
        //if it is player 1's turn then...
        if (currentPlayer == p1) {
            //put player one's image in that spot
            document.getElementById(GridItem).innerHTML = '<img src= "' + Player1Image + '" style="height: 100%; width: 100%;"/>';
            //switch current player to player 2
            currentPlayer = p2;
            //change the opacities of the two banners
            document.getElementById("commentoggle").style.opacity = "0.35";
            document.getElementById("commentoggle2").style.opacity = "0.85";
        }
        else {
            //do the same thing as the above if statement bu for player 2
            document.getElementById(GridItem).innerHTML = '<img src= "' + player2image + '" style="height: 100%; width: 100%; "/>';
            currentPlayer = p1;
            document.getElementById("commentoggle").style.opacity = "0.85";
            document.getElementById("commentoggle2").style.opacity = "0.35";
        }
        //12-22-18: not sure what the next line does
        var smallGrid = GridItem.substr(0, 2);
        // console.log("This is the grid that has been chosen " + smallGrid);
        //12-22-18: this next block of code removes the outline around all sub boxes
        document.getElementById("ga1").style.outline = "0";
        document.getElementById("ga2").style.outline = "0";
        document.getElementById("ga3").style.outline = "0";
        document.getElementById("gb1").style.outline = "0";
        document.getElementById("gb2").style.outline = "0";
        document.getElementById("gb3").style.outline = "0";
        document.getElementById("gc1").style.outline = "0";
        document.getElementById("gc2").style.outline = "0";
        document.getElementById("gc3").style.outline = "0";
        //12-22-18: provides outline around sub box (next 7 lines)
        var GoldenOutline = "g" + smallGrid;
        if (currentPlayer == p1) {
            document.getElementById(GoldenOutline).style.outline = "13px solid " + player1color;
        } else {
            document.getElementById(GoldenOutline).style.outline = "13px solid " + player2color;
        }
        document.getElementById(GoldenOutline).style.outlineOffset = "-17px";
        //12-22-18: not sure what this next line does
        var bigGrid = GridItem.substr(2, 4);
        //12-22-18: vestigial line of code
        // console.log("This is the grid that has been chosen " + bigGrid);
        //12-22-18 what is this next switch statement?
        switch (bigGrid) {
            case "1id":
                var index = OneSquares.indexOf(GridItem);
                if (index > -1) {
                    OneSquares.splice(index, 1);
                }
                // console.log(OneSquares);
                if (OneWon == false) {
                    victoryCheck(OnePositions, GridItem);
                }
                break;
            case "2id":
                var index = TwoSquares.indexOf(GridItem);
                if (index > -1) {
                    TwoSquares.splice(index, 1);
                }
                if (TwoWon == false) {
                    victoryCheck(TwoPositions, GridItem);
                }
                break;
            case "3id":
                var index = ThreeSquares.indexOf(GridItem);
                if (index > -1) {
                    ThreeSquares.splice(index, 1);
                }
                if (ThreeWon == false) {
                    victoryCheck(ThreePositions, GridItem);
                }
                break;
            case "4id":
                var index = FourSquares.indexOf(GridItem);
                if (index > -1) {
                    FourSquares.splice(index, 1);
                }
                if (FourWon == false) {
                    victoryCheck(FourPositions, GridItem);
                }
                break;
            case "5id":
                var index = FiveSquares.indexOf(GridItem);
                if (index > -1) {
                    FiveSquares.splice(index, 1);
                }
                if (FiveWon == false) {
                    victoryCheck(FivePositions, GridItem);
                }
                break;
            case "6id":
                var index = SixSquares.indexOf(GridItem);
                if (index > -1) {
                    SixSquares.splice(index, 1);
                }
                if (SixWon == false) {
                    victoryCheck(SixPositions, GridItem);
                }
                break;
            case "7id":
                var index = SevenSquares.indexOf(GridItem);
                if (index > -1) {
                    SevenSquares.splice(index, 1);
                }
                if (SevenWon == false) {
                    victoryCheck(SevenPositions, GridItem);
                }
                break;
            case "8id":
                var index = EightSquares.indexOf(GridItem);
                if (index > -1) {
                    EightSquares.splice(index, 1);
                }
                if (EightWon == false) {
                    victoryCheck(EightPositions, GridItem);
                }
                break;
            case "9id":
                var index = NineSquares.indexOf(GridItem);
                if (index > -1) {
                    NineSquares.splice(index, 1);
                }
                if (NineWon == false) {
                    victoryCheck(NinePositions, GridItem);
                }
                break;
            default: Console.log(bigGrid);
        }
        switch (smallGrid) {
            case "a1":
                ValidSquares = OneSquares;
                if (ValidSquares.length == 0) {
                    reValidate(OnePositions, "1id");
                }
                break;
            case "a2":
                ValidSquares = FourSquares;
                if (ValidSquares.length == 0) {
                    reValidate(FourPositions, "4id");
                }
                break;
            case "a3":
                ValidSquares = SevenSquares;
                if (ValidSquares.length == 0) {
                    reValidate(SevenPositions, "7id");
                }
                break;
            case "b1":
                ValidSquares = TwoSquares;
                if (ValidSquares.length == 0) {
                    reValidate(TwoPositions, "2id");
                }
                break;
            case "b2":
                ValidSquares = FiveSquares;
                if (ValidSquares.length == 0) {
                    reValidate(FivePositions, "5id");
                }
                break;
            case "b3":
                ValidSquares = EightSquares;
                if (ValidSquares.length == 0) {
                    reValidate(EightPositions, "8id");
                }
                break;
            case "c1":
                ValidSquares = ThreeSquares;
                if (ValidSquares.length == 0) {
                    reValidate(ThreePositions, "3id");
                }
                break;
            case "c2":
                ValidSquares = SixSquares;
                if (ValidSquares.length == 0) {
                    reValidate(SixPositions, "6id");
                }
                break;
            case "c3":
                ValidSquares = NineSquares;
                if (ValidSquares.length == 0) {
                    reValidate(NinePositions, "9id");
                }
                break;
            default: break;
        }
    }
}

// 12-20-18
//as long as a new parameter is sent in, these two functions can be combined
var lordFile = function (event) {
    console.log("LordFle");
    var output = document.getElementById('OsImg');
    output.src = URL.createObjectURL(event.target.files[0]);
    // document.getElementById('Imagediv').style.display = "block";
    // var img = document.getElementById('imgContainer'); 
    // //or however you get a handle to the IMG
    // var height = img.offsetHeight;
    // console.log(height)
    // document.getElementById('sumInfoDiv').style.marginTop = '5%';
    console.log(URL.createObjectURL(event.target.files[0]));
    player2image = URL.createObjectURL(event.target.files[0]);
    // document.getElementById('myImage').src='pic_bulbon.gif'
    // document.getElementById('sumInfoDiv').style.top = String(height) + "px";
};

var loadFile = function (event) {
    console.log("loadFle");
    var output = document.getElementById('XsImg');
    output.src = URL.createObjectURL(event.target.files[0]);
    // document.getElementById('Imagediv').style.display = "block";
    // var img = document.getElementById('imgContainer'); 
    // //or however you get a handle to the IMG
    // var height = img.offsetHeight;
    // console.log(height)
    // document.getElementById('sumInfoDiv').style.marginTop = '5%';
    console.log(URL.createObjectURL(event.target.files[0]));
    Player1Image = URL.createObjectURL(event.target.files[0]);
    // document.getElementById('myImage').src='pic_bulbon.gif'
    // document.getElementById('sumInfoDiv').style.top = String(height) + "px";
};

// 12-20-18 probably can't be broken up any further
function popSummary(thing) {
    console.log("popSummary");
    switch (thing) {
        case "player1":
            if (document.getElementById('fname').value != "")
            // document.getElementById('fname').value != "") {
            // p1 = document.getElementById('fname').value;
            // document.getElementById("Player1Label").textContent = p1;
            {
                var newname = (document.getElementById('fname').value);
                p1Name = newname;
                //05-05-19
                // p1 = newname;
                document.getElementById("Player1Label").textContent = newname;
            }
        case "player2":
            if (document.getElementById('lname').value != "") {
                var newname = (document.getElementById('lname').value)
                p2Name = newname;
                //05-05-19
                // p2 = newname;
                document.getElementById("Player2Label").textContent = newname;
            }
    }
}

// 12-20-18 probably can't be broken up any further
//12-20-18 use radio ability
function updateLanguage(Lang) {
    //05-05-19
    console.log("updateLanguage");
    switch (Lang) {
        case "English":
            document.getElementById('title').innerHTML = "ULT - TIC - TAC - TOE";
            document.getElementById('rLink').innerHTML = "RULES";
            document.getElementById('Espanol').checked = false;
            document.getElementById('Chinese').checked = false;
            document.getElementById('Japanese').checked = false;
            if (p1Name == "Jugador 1" || p1Name == "プレーヤー 1" || p1Name == "播放机 1" ){
                p1Name = 'Player 1';
                document.getElementById("Player1Label").textContent = p1Name;
            }
            if (p2Name == "Jugador 2" || p2Name == "プレーヤー 2" || p2Name == "播放机 2" ){
                p2Name = 'Player 2';
                document.getElementById("Player2Label").textContent = p2Name;
            }
            // p1 = 'Player 1 ';
            // p2 = 'Player 2 ';
            wins = ' Wins!';
            return;
        case "Spanish":
            document.getElementById('title').innerHTML = "ÚLT - TIC - TAC - TOE";
            document.getElementById('rLink').innerHTML = "REGLAS";
            document.getElementById('English').checked = false;
            document.getElementById('Chinese').checked = false;
            document.getElementById('Japanese').checked = false;
            if (p1Name == "Player 1" || p1Name == "プレーヤー 1" || p1Name == "播放机 1" ){
                p1Name = 'Jugador 1';
                document.getElementById("Player1Label").textContent = p1Name;
            }
            if (p2Name == "Player 2" || p2Name == "プレーヤー 2" || p2Name == "播放机 2" ){
                p2Name = 'Jugador 2';
                document.getElementById("Player2Label").textContent = p2Name;
            }
            // p1 = 'Jugador 1 ';
            // p2 = 'Jugador 2 ';
            wins = ' Gano!';
            return;
        case "Japanese":
            document.getElementById('title').innerHTML = "○×ゲーム";
            document.getElementById('rLink').innerHTML = "ルール";
            document.getElementById('English').checked = false;
            document.getElementById('Espanol').checked = false;
            document.getElementById('Chinese').checked = false;
            wins = ' 勝つ';
            if (p1Name == "Player 1" || p1Name == "Jugador 1" || p1Name == "播放机 1" ){
                p1Name = 'プレーヤー 1';
                document.getElementById("Player1Label").textContent = p1Name;
            }
            if (p2Name == "Player 2" || p2Name == "Jugador 2" || p2Name == "播放机 2" ){
                p2Name = 'プレーヤー 2';
                document.getElementById("Player2Label").textContent = p2Name;
            }
            // p1 = 'プレーヤー 1 ';
            // p2 = 'プレーヤー 2 ';
            return;
        default:
            document.getElementById('title').innerHTML = "井字棋";
            document.getElementById('rLink').innerHTML = "规则";
            document.getElementById('English').checked = false;
            document.getElementById('Espanol').checked = false;
            document.getElementById('Japanese').checked = false;
            wins = ' 胜';
            if (p1Name == "Player 1" || p1Name == "Jugador 1" || p1Name == "プレーヤー 1"){
                p1Name = '播放机 1';
                document.getElementById("Player1Label").textContent = p1Name;
            }
            if (p2Name == "Player 2" || p2Name == "Jugador 2" || p2Name == "プレーヤー 2"){
                p2Name = '播放机 2';
                document.getElementById("Player2Label").textContent = p2Name;
            }
            // p1 = '播放机 1 ';
            // p2 = '播放机 2 ';
    }
    // for (x = 0; x < this.elements.length; x++) {
    //     if (this.elements[x].type == "radio") {
    //         this.elements[x].checked = false;
    //     }
    // }
}