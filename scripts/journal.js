import API from "./data.js"
import addToDOM from "./entriesDOM.js"

// API.getJournalEntries().then(addToDOM.renderJournalEntries);

const entryFactory = entry => {
    return {
        "date": entry[0],
        "concepts": entry[1],
        "entry": entry[2],
        "mood": entry[3]
    }
}

const saveEntry = () => {
    const date = document.querySelector("#journalDate")
    const concepts = document.querySelector("#journalConcepts")
    const entry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#journalMood")
    const values = [date.value, concepts.value, entry.value, mood.value]
    let inputChecker = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== "") {
            inputChecker++
        }
    }
    if (inputChecker === values.length) {
        const entryObj = entryFactory(values)
        API.createJournalEntry(entryObj)
        // .then(API.getJournalEntries).then(addToDOM.renderJournalEntries)
    } else {
        alert("At least one of your input fields are empty")
    }
}

const showByMood = () => {
    const moodMatch = []
    let moodValue = ""
    const radioButtons = document.getElementsByName("mood")
    radioButtons.forEach(button => {
        if (button.checked) {
            moodValue = button.value
        }
    })
    API.getJournalEntries().then(entry => {
        entry.forEach(mood => {
            if (mood.mood === moodValue){
                moodMatch.push(mood)
            }
        })
        addToDOM.renderJournalEntries(moodMatch)
    })
}

const saveButton = document.querySelector(".journalRecord")
saveButton.addEventListener("click", saveEntry)

const moodArea = document.querySelector(".radioField")
moodArea.addEventListener("click", showByMood)