//@ts-check
/**
 * @author Juan Ayala <juanayala099@gmail.com>
 */


/**
 * Getting the container which the board will be appended to.
 * @constant
 * @type HTMLElement?
 * @default
 */
const mainContainer = document.getElementById('main-container');

/**
 * This constant gets the value of the input that contains the size of the board selected by the user.
 * @constant
 * @type HTMLElement?
 * @default
 */
const boardSize = document.getElementById("board-size"); 


/**
 * Getting the button element from the DOM to submit the size of the board.
 * @constant
 * @type HTMLElement?
 * @default
 */
const submitBoardSize = document.getElementById("submit-board-size")



/**
 * Array that will contain the columns and rows of the board.
 * @type number|String[]
 */
let board = []

/**
 * This variable sets the turn of a player, if true is x's turn, otherwise, if false is o's turn
 * @type boolean
 * @default
 */
let turn = true;

/**
 * This function displays the board with the amount of rows and columns as passed on the parameters.
 * @param {number} size This is the amount of rows and columns that will be displayed.
 */
const displayBoard = (size)=>{
    let HTMLSquare = ""
    board = []
    turn = true
    for(let i = 0; i < size; i++){
        //@ts-ignore
        HTMLSquare += "<div class='square-container' >"
        for(let j = 0; j < size; j++){
            //@ts-ignore
            board.push(0)
            HTMLSquare +=  
            `<div class="square" data-row=${i} data-column=${j}>
            </div>`
        }
        HTMLSquare += "</div> <br>"
    }
    //@ts-ignore
    mainContainer.innerHTML = HTMLSquare

    /**
     * This constant gets all the squares of the board.
     * @constant
     * @type NodeListOf<Element>
     * @default
     */
    const square = document.querySelectorAll(".square")
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener("click", ()=>{
            turn ? addX(square[i]) : addO(square[i])
            turn ? board[i] = "O" : board[i] = "X"
            checkForWin()
        })
    }

}


/** */
submitBoardSize?.addEventListener("click", (e)=>{
    e.preventDefault()
    // @ts-ignore
    if(boardSize.value < 3 || boardSize.value > 10){
        alert("The size must be between 3 and 10")
        return
    }
    // @ts-ignore
    displayBoard(boardSize.value)
})
/**
 * This function adds an "x" to the square selected
 * @param {*} square 
 */
 const addX = (square)=>{
    if(!square.classList.contains("exes")&&!square.classList.contains("circle")){
        square.classList += " exes"
        turn = !turn
    }
}
/**
 * This function adds an "o" to the square selected
 * @param {*} square 
 */
const addO = (square)=>{
    if(!square.classList.contains("exes")&&!square.classList.contains("circle")){
        square.classList += " circle"
        turn = !turn
    }
}

const checkForWin = ()=>{
    // @ts-ignore
    for(let i = 0; i < +boardSize.value*+boardSize.value ;i++){
        // @ts-ignore
        if(+boardSize.value === 3){
            if(board[i] !== 0){
                //@ts-ignore
                if(board[i] == board[i + +boardSize.value] && board[i] == board[i + boardSize.value*2]){
                    alert("Row Win")
                }
                else if(board[i] == board[i+1] && board[i] == board[i+2]){
                    alert("Column Win")
                    // @ts-ignore
                }else if(board[i] == board[i + +boardSize.value +1] && board[i] == board[(i+ +boardSize.value +1)*2]){
                    alert("First Diagonal Win")
                    // @ts-ignore
                }else if(board[i] == board[i + +boardSize.value -1] && board[i] == board[(i + +boardSize.value -2)*2] ){
                    alert("Second Diagonal Win")
                }
            }
        }else{
            if(board[i] !== 0){
                //@ts-ignore
                if(board[i] == board[i + +boardSize.value] && board[i] == board[i + boardSize.value*2] && board[i] == board[i + boardSize.value*3]){
                    alert("Row Win")
                }else if(board[i] == board[i+1] && board[i] == board[i+2] && board[i] == board[i+3]){
                    alert("Column Win")
                    // @ts-ignore
                }else if(board[i] == board[i + +boardSize.value +1] && board[i] == board[i+ (+boardSize.value +1)*2] && board[i] == board[i+ (+boardSize.value +1)*3]){
                    alert("First Diagonal Win")
                    // @ts-ignore
                }else if(board[i] == board[i - (+boardSize.value -1)] && board[i] == board[i - (+boardSize.value -1)*2] && board[i] == board[i - (+boardSize.value -1)*3]){
                    alert("Second Diagonal Win")
                }
            }

        }
        console.log(board[i])
    }
}
