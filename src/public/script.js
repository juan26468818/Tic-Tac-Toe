//@ts-check
/**
 * @author Juan Ayala <juanayala099@gmail.com>
 */
/**
 * Getting the container which the board will be appended to.
 * @constant
 * @type HTMLElement|null
 * @default
 */
const mainContainer = document.getElementById('main-container');
const boardSize = document.getElementById("board-size"); 
/**
 * Getting the button element from the DOM to submit the size of the board.
 * @constant
 * @type HTMLElement|null
 * @default
 */
const submitBoardSize = document.getElementById("submit-board-size")
/**
 * Array that will contain the columns and rows of the board.
 * @type number|String[]
 */
const board = []
/**
 * This function displays the board with the amount of rows and columns as passed on the parameters.
 * @param {number} size This is the amount of rows and columns that will be displayed.
 */
const displayBoard = (size)=>{
    let HTMLSquare = ""
    for(let i = 0; i < size; i++){
        HTMLSquare += "<div class='square-container' >"
        for(let j = 0; j < size; j++){
            HTMLSquare +=  
            `<div class="square">
                <p>0</p>
            </div>`
        }
        HTMLSquare += "</div> <br>"
    }
    //@ts-ignore
    mainContainer.innerHTML = HTMLSquare
}
// @ts-ignore
submitBoardSize.addEventListener("click", (e)=>{
    e.preventDefault()
    // @ts-ignore
    displayBoard(boardSize.value)
})
