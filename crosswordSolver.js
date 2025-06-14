"use strict"


const crosswordSolver = (crossword, words) => {
  if (typeof crossword !== "string" || !Array.isArray(words) || words.some((word) => typeof word !== "string")
  ) { //if - checks not a string OR words is not an array OR any element of words is not a string. If any conditions are true, function logs an error message to the console and returns the string "Error".
    console.log("Error")
    return "Error"
  }
  // only allow '.', '\n', 0, 1 and 2 - 1 or more - 
  if (!/^[.\n012]+$/.test(crossword)) {  
    console.log("Error")
    return "Error"
  }
  //maps itirates over each row of the crossword array and then maps over each cell checking "."
  // Each cell contains number of words starting from this cell (0, 1 or 2) or -1 if cell is not available
  const puzzleNumbers = crossword.trim().split("\n").map((row) => row.split("").map((cell) => (cell === "." ? -1 : parseInt(cell))))
  const wordsBeginnings = puzzleNumbers.map((row, rowIndex) => row.map((cell, colIndex) => ({row: rowIndex, col: colIndex, //2
      })) 
    )
    .flat() //filter() method = new array that includes all elements of the words array that pass a certain test. 
    .filter((cell) => puzzleNumbers[cell.row][cell.col] > 0) //test is whether the length of the word matches the number in the corresponding cell in wordsBeginnings. The every() method is used inside the filter() method to check this condition for each letter in the word.
  if (
    wordsBeginnings.reduce((acc, cell) => acc + puzzleNumbers[cell.row][cell.col], 0) !== words.length
  ) { //returning sum - result should be the same length value of of words array. 
    console.log("Error")
    return "Error"
  }
  const puzzleWidth = puzzleNumbers[0].length //do all rows in puzzlenumbers have the same length if not error?
  if (puzzleNumbers.some((row) => row.length !== puzzleWidth)) { 
    console.log("Error")
    return "Error"
  }
  // words repetition
  if (new Set(words).size !== words.length) {
    console.log("Error")
    return "Error"
  }
  // sort words by length (to add the longest to board first)
  words.sort((a, b) => b.length - a.length)
  //
  // Each cell contains letter if cell is occupied, "" if cell is empty or "." if cell is not available
  const puzzleWords = puzzleNumbers.map((row) => row.map((cell) => (cell === -1 ? "." : "")))
  // Function that checks if it's possible to place word in crossword based on direction ca t
  // starting from cell (row, col) in direction (horizontal or vertical)
  const canAddWord = (word, row, col, direction) => {
    var _a 
    if (direction === "horizontal" && col + word.length > puzzleNumbers[row].length) {
      return false
    }
    if (direction === "vertical" && row + word.length > puzzleNumbers.length) {
      return false
    }
    for (let i = 0; i < word.length; i++) { //ititrate over each letter in 'word' 
      if (puzzleWords[row][col] !== "") { //is it empty?
        if (puzzleWords[row][col] !== word[i]) { //checking if the letter in the cell matches letter in 'word'
          return false 
        }
      }
      direction === "horizontal" ? col++ : row++ //continues incrementation for the next 'word' 
    }
    // cell after word should be unavailable (or out of the board)
    const afterWordCell = (_a = puzzleNumbers[row]) === null || _a === void 0 ? void 0 : _a[col]
    return afterWordCell === -1 || afterWordCell === undefined
  }
  const addWords = (words) => { //takes array of 'words' and then check if the array is empty.  
    if (words.length === 0) { // 
      return true
    }
    for (const word of words) {
      for (const cell of wordsBeginnings) { //checks each cell if it's '0' because it means word cannot begin in that cell. 
        if (puzzleNumbers[cell.row][cell.col] === 0) continue 
        if (canAddWord(word, cell.row, cell.col, "horizontal")) { //if not above, this func chcks if words can be added horz/verti
          const backupRow = puzzleWords[cell.row].slice()
          for (let j = 0; j < word.length; j++) {
            puzzleWords[cell.row][cell.col + j] = word[j]
          }
          puzzleNumbers[cell.row][cell.col]--
          if (addWords(words.filter((w) => w !== word))) {
            return true
          }
          puzzleNumbers[cell.row][cell.col]++
          puzzleWords[cell.row] = backupRow
        }
        if (canAddWord(word, cell.row, cell.col, "vertical")) {
          const backupCol = puzzleWords.map((row) => row[cell.col])
          for (let j = 0; j < word.length; j++) {
            puzzleWords[cell.row + j][cell.col] = word[j]
          }
          puzzleNumbers[cell.row][cell.col]--
          if (addWords(words.filter((w) => w !== word))) {
            return true
          }
          puzzleNumbers[cell.row][cell.col]++
          puzzleWords.forEach((row, index) => (row[cell.col] = backupCol[index]))
        }
      }
    }
    return false
  }
  if (!addWords(words)) {
    console.log("Error")
    return "Error"
  }
  const result = puzzleWords.map((row) => row.join("")).join("\n")
  console.log(result)
  return result
}
const puzzle = 
`...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`
const words = [
	'sun',
	'sunglasses',
	'suncream',
	'swimming',
	'bikini',
	'beach',
	'icecream',
	'tan',
	'deckchair',
	'sand',
	'seaside',
	'sandals'
]
crosswordSolver(puzzle, words)
