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
 * @type HTMLElement|null
 */
const submitBoardSize = document.getElementById("submit-board-size")
/**
 * Array that will contain the columns and rows of the board.
 * @type number|String[]
 */
const board = []
console.log(submitBoardSize)

// @ts-ignore
submitBoardSize.addEventListener("click", (e)=>{
    e.preventDefault()
})