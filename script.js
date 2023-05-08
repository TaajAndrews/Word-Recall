/*----- constants -----*/
const wordBank = [
  {
    word: "critique",
    definition: "to examine in an analytical manner",
    letters: ["q", "c", "q", "e", "t", "r", "i", "u", "g", "i"],
    points: 40,
  },
  {
    word: "uptight",
    definition: "anxious and unable to relax",
    letters: ["p", "g", "h", "t", "f", "i", "e", "t", "u", "i"],
    points: 35,
  },
  {
    word: "blatant",
    definition: "obvious or conspicuous",
    letters: ["t", "b", "n", "t", "a", "l", "n", "w", "m", "a"],
    points: 35,
  },
  {
    word: "fabulous",
    definition: "amazingly good",
    letters: ["a", "l", "o", "o", "u", "s", "u", "f", "b", "l"],
    points: 40,
  },
  {
    word: "disburse",
    definition: "to pay out",
    letters: ["b", "i", "l", "s", "s", "u", "r", "e", "s", "d"],
    points: 40,
  },
  {
    word: "ascertain",
    definition: "to find out",
    letters: ["c", "a", "r", "n", "e", "r", "i", "s", "t", "a"],
    points: 45,
  },
  {
    word: "ascribe",
    definition: "to attribute an outcome to something",
    letters: ["e", "e", "i", "s", "b", "c", "r", "d", "a", "l"],
    points: 35,
  },
  {
    word: "concede",
    definition: "to admit to",
    letters: ["l", "c", "x", "e", "n", "e", "c", "e", "o", "d"],
    points: 35,
  },
  {
    word: "expansive",
    definition: "covering a wide area",
    letters: ["s", "n", "i", "a", "a", "u", "s", "v", "e", "k"],
    points: 45,
  },
  {
    word: "disclose",
    definition: "to provide information to someone",
    letters: ["o", "y", "c", "i", "s", "d", "l", "e", "s", "e"],
    points: 40,
  },
  {
    word: "squeeze",
    definition: "to press tightly",
    letters: ["u", "u", "e", "t", "s", "e", "h", "q", "z", "e"],
    points: 35,
  },
  {
    word: "illegible",
    definition: "unable to read",
    letters: ["x", "b", "l", "l", "e", "l", "e", "g", "i", "i"],
    points: 45,
  },
]
/*----- state variables -----*/
let score // Tracks current score
let usedWords // words used in the game already
let letterBank // currentletters visible in the game
let wordBar // place to input word
let defPrompt // definition prompt
let correctWord // 1 = correct word; -1 incorrect word
let count
let letterBoard
/*----- cached elements  -----*/
const submitBtn = document.getElementById("submit")
const defPromptEl = document.getElementById("def-prompt")
const wordBarEL = document.getElementById("wordBar")
const letterBtnArray = [...document.querySelectorAll(".letterBtn")]
const btn0 = document.getElementById("0")
const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const btn4 = document.getElementById("4")
const btn5 = document.getElementById("5")
const btn6 = document.getElementById("6")
const btn7 = document.getElementById("7")
const btn8 = document.getElementById("8")
const btn9 = document.getElementById("9")
/*----- functions -----*/
const init = () => {
  count = 1
  letterBoard = ["", "", "", "", "", "", "", "", "", ""]
  wordBar = ""
  defPrompt = ""
  correctWord
  render()
}
const render = () => {
  // renderWordBar(count)
  renderBoard(count)
  renderDefPrompt(count)
}

const renderDefPrompt = (count) => {
  defPrompt = wordBank[count].definition
  defPromptEl.innerText = defPrompt
}

const renderBoard = (count) => {
  letterBoard = wordBank[count].letters
  btn0.innerText = letterBoard[0]
  btn1.innerText = letterBoard[1]
  btn2.innerText = letterBoard[2]
  btn3.innerText = letterBoard[3]
  btn4.innerText = letterBoard[4]
  btn5.innerText = letterBoard[5]
  btn6.innerText = letterBoard[6]
  btn7.innerText = letterBoard[7]
  btn8.innerText = letterBoard[8]
  btn9.innerText = letterBoard[9]
}

/*----- event listeners -----*/
const tempLtr = []
const handleClickedLetter = (evt) => {
  const clkLtr = evt.target.innerText
  if (tempLtr.length < 10) {
    tempLtr.push(clkLtr)
    const newWord = tempLtr.join(" ")
    wordBarEL.innerText = newWord
  }
}

const handleClickSubmit = (evt) => {
  const subClk = evt.target // entire button
  if (tempLtr.join("") === wordBank[count].word) {
    wordBarEL.style.borderColor = "rgb(252, 195, 64)"
  } else {
    wordBarEL.style.borderColor = "rgb(241, 89, 41)"
  }
}
init()

document.getElementById("bank").addEventListener("click", handleClickedLetter)

submitBtn.addEventListener("click", handleClickSubmit)
