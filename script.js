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
    letters: ["e", "n", "i", "a", "a", "p", "s", "v", "e", "x"],
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
  {
    word: "miserable",
    definition: "very unhappy",
    letters: ["b", "i", "e", "m", "j", "l", "s", "e", "r", "a"],
    points: 45,
  },
  {
    word: "circular",
    definition: "round in shape",
    letters: ["c", "l", "r", "i", "c", "u", "r", "a", "a", "k"],
    points: 40,
  },
  {
    word: "abundant",
    definition: "in great quantity",
    letters: ["b", "n", "d", "t", "n", "u", "v", "a", "u", "a"],
    points: 40,
  },
  {
    word: "standard",
    definition: "reference point in which others are judged",
    letters: ["n", "s", "r", "d", "t", "a", "d", "f", "a", "l"],
    points: 40,
  },
  {
    word: "creative",
    definition: "imaginative",
    letters: ["r", "e", "s", "v", "t", "r", "i", "c", "e", "a"],
    points: 40,
  },
  {
    word: "petition",
    definition: "to request formally and in writing",
    letters: ["o", "i", "h", "i", "n", "p", "s", "t", "t", "e"],
    points: 40,
  },
  {
    word: "defiant",
    definition: "boldly resisting authority",
    letters: ["e", "t", "e", "z", "i", "n", "f", "a", "d", "l"],
    points: 35,
  },
  {
    word: "applaud",
    definition: "to commend, often by clapping",
    letters: ["l", "n", "a", "x", "p", "r", "p", "d", "u", "a"],
    points: 35,
  },
  {
    word: "bankrupt",
    definition: "unable to pay debts",
    letters: ["a", "k", "t", "q", "r", "u", "b", "p", "r", "n"],
    points: 40,
  },
  {
    word: "archrival",
    definition: "principal opponent",
    letters: ["r", "h", "a", "a", "x", "i", "r", "v", "c", "l"],
    points: 45,
  },
  {
    word: "beginning",
    definition: "time at which something starts",
    letters: ["e", "n", "n", "g", "p", "n", "i", "i", "b", "g"],
    points: 45,
  },
  {
    word: "anonymity",
    definition: "state of being unknown",
    letters: ["n", "m", "t", "a", "y", "g", "y", "n", "i", "o"],
    points: 45,
  },
  {
    word: "alterable",
    definition: "adaptable",
    letters: ["t", "l", "a", "l", "a", "r", "b", "e", "e", "n"],
    points: 45,
  },
  {
    word: "placebo",
    definition: "harmless pill that may cause psychological relief",
    letters: ["b", "a", "e", "o", "l", "x", "d", "c", "p", "v"],
    points: 45,
  },
  {
    word: "prolific",
    definition: "productive",
    letters: ["o", "t", "f", "l", "r", "i", "q", "c", "i", "p"],
    points: 40,
  },
  {
    word: "belittle",
    definition: "to make seem unimportant",
    letters: ["e", "l", "l", "s", "b", "m", "t", "e", "i", "t"],
    points: 40,
  },
  {
    word: "befriend",
    definition: "to bond with as a companion",
    letters: ["n", "e", "i", "b", "d", "f", "r", "e", "o", "l"],
    points: 40,
  },
  {
    word: "bedazzle",
    definition: "to captivate",
    letters: ["a", "d", "e", "e", "z", "b", "l", "m", "y", "z"],
    points: 40,
  },
  {
    word: "continual",
    definition: "happening again and again",
    letters: ["n", "o", "n", "z", "i", "u", "a", "t", "c", "l"],
    points: 45,
  },
  {
    word: "container",
    definition: "object used to hold something",
    letters: ["e", "t", "a", "r", "z", "n", "n", "c", "i", "o"],
    points: 45,
  },
  {
    word: "discreet",
    definition: "careful and cautious in one's behavior ",
    letters: ["r", "l", "t", "i", "s", "e", "e", "n", "c", "d"],
    points: 40,
  },
  {
    word: "baffling",
    definition: "confusing",
    letters: ["a", "n", "f", "g", "f", "b", "i", "r", "t", "l"],
    points: 40,
  },
  {
    word: "control",
    definition: "to have power over",
    letters: ["o", "l", "r", "h", "o", "r", "c", "u", "t", "n"],
    points: 35,
  },
  {
    word: "intricate",
    definition: "very complex",
    letters: ["c", "n", "t", "a", "i", "e", "i", "b", "t", "r"],
    points: 45,
  },
  {
    word: "nemesis",
    definition: "archenemy, especially one who is often victorious",
    letters: ["e", "s", "y", "s", "e", "z", "i", "h", "m", "n"],
    points: 35,
  },
  {
    word: "convince",
    definition: "to cause to believe something",
    letters: ["c", "n", "o", "e", "i", "n", "l", "r", "v", "c"],
    points: 40,
  },
  {
    word: "combative",
    definition: "ready to fight",
    letters: ["f", "v", "e", "a-", "i", "t", "m", "o", "c", "b"],
    points: 40,
  },
  {
    word: "cacophony",
    definition: "harsh sound",
    letters: ["o", "y", "h", "a", "c", "n", "o", "p", "m", "c"],
    points: 45,
  },
  {
    word: "vivacious",
    definition: "highly spirited",
    letters: ["c", "v", "q", "i", "v", "a", "i", "u", "s", "o"],
    points: 40,
  },
  {
    word: "affidavit",
    definition: "written legal declaration confirmed by oath",
    letters: ["f", "v", "f", "a", "a", "d", "t", "i", "i", "f"],
    points: 45,
  },
  {
    word: "cohesive",
    definition: "causing to stick together",
    letters: ["i", "o", "v", "e", "d", "e", "s", "e", "c", "h"],
    points: 40,
  },
  {
    word: "charter",
    definition: "to grant official recognition",
    letters: ["e", "j", "t", "h", "r", "v", "a", "r", "c", "t"],
    points: 35,
  },
  {
    word: "compact",
    definition: "closely packed together",
    letters: ["o", "c", "m", "a", "c", "h", "u", "g", "t", "p-"],
    points: 35,
  },
  {
    word: "calcify",
    definition: "to harden",
    letters: ["a", "c", "o", "c", "l", "y", "i", "f", "i", "q"],
    points: 35,
  },
  {
    word: "incident",
    definition: "episode, especially a negative one",
    letters: ["t", "i", "r", "o", "d", "n", "i", "e", "c", "n"],
    points: 40,
  },
  {
    word: "decadent",
    definition: "marked by self-indulgence",
    letters: ["d", "j", "c", "a", "i", "e", "n", "e", "d", "t"],
    points: 40,
  },
  {
    word: "baneful",
    definition: "extremely harmful",
    letters: ["b", "u", "a", "o", "e", "n", "k", "l", "f", "v"],
    points: 35,
  },
  {
    word: "de",
    definition: "to treat with disrespect",
    letters: ["a", "t", "c", "r", "w", "s", "e", "d", "e", "e"],
    points: 40,
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
const wordBarEl = document.getElementById("wordBar")
const letterBtnArray = [...document.querySelectorAll(".letterBtn")]

const timerEl = document.getElementById("timer")

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

const wordGenerator = (wordBank) => {
  const randomWordIdx = Math.floor(Math.random() * wordBank.length)
  return randomWordIdx
}

const init = () => {
  count = wordGenerator(wordBank)
  letterBoard = ["", "", "", "", "", "", "", "", "", ""]
  wordBar = ""
  defPrompt = ""
  wordBarEl.style.borderColor = "rgb(223, 223, 223)"
  render()
}
const render = () => {
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
let tempLtr = []
const handleClickedLetter = (evt) => {
  if (evt.target.id === "bank") {
    return
  }
  const clkLtr = evt.target.innerText
  if (tempLtr.length < 10) {
    tempLtr.push(clkLtr)
    const newWord = tempLtr.join("")
    wordBarEl.innerText = newWord
  }
  render()
}

const handleClickSubmit = (evt) => {
  const subClk = evt.target // entire button
  if (tempLtr.join("") === wordBank[count].word) {
    wordBarEl.style.borderColor = "rgb(223, 223, 223)"
    wordBarEl.innerText = ""
    tempLtr = []
    count++
  } else {
    wordBarEl.style.borderColor = "rgb(241, 89, 41)"
  }
  render()
}

const handleBackSpace = (evt) => {
  const bkSpace = evt.target // entire button
  if (bkSpace) {
    tempLtr.pop()
    wordBarEl.innerText = tempLtr.join("")
  }
  render()
}

init()

document.getElementById("bank").addEventListener("click", handleClickedLetter)

submitBtn.addEventListener("click", handleClickSubmit)

document.getElementById("backspace").addEventListener("click", handleBackSpace)
