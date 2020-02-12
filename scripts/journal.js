import API from "./data.js"
import addToDOM from "./entriesDOM.js"

API.getMoods().then(addToDOM.renderMoods);

const searchInput = document.querySelector(".searchBar")

searchInput.addEventListener("keyup", event => {
    const keyname = event.key
  if (keyname === "Enter") {
    const searchTerm = event.target.value
    const matches = []
    API.getJournalEntries().then(entries => {
        entries.forEach(entry => {
            const values = Object.values(entry)
            for (let i = 0; i < values.length; i++) {
                let stringVal = values[i]
                if (stringVal === entry.id){
                    stringVal = entry.id.toString()
                }
                if (stringVal === entry.moodId){
                    stringVal = entry.moodId.toString()
                }
                if (entry.mood.label.includes(searchTerm)){
                    matches.push(entry)
                    i += values.length;
                } else if (stringVal === entry.mood){
                    i += values.length;
                } else if (stringVal.includes(searchTerm)) {
                    matches.push(entry)
                    i += values.length;
                }
                
            }
        })
        addToDOM.renderJournalEntries(matches)})
        document.querySelector("#entryId").value = ""
        entryEventListener()
  }
})

const entryFactory = entry => {
    return {
        "date": entry[0],
        "concepts": entry[1],
        "entry": entry[2],
        "moodId": entry[3]
    }
}

const saveEntry = () => {
    const date = document.querySelector("#journalDate")
    const concepts = document.querySelector("#journalConcepts")
    const entry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#journalMood")
    const hideyId = document.querySelector("#entryId")
    const values = [date.value, concepts.value, entry.value, mood.value]
    let inputChecker = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== "") {
            inputChecker++
        }
    }
    if (inputChecker === values.length) {
        const entryObj = entryFactory(values)
        if (hideyId.value !== "") {
            API.editEntry(entryObj, hideyId.value)
        } else {
            API.createJournalEntry(entryObj)
        }
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
            document.querySelector("#entryId").value = ""
        }
    })
    API.getJournalEntries().then(entry => {
        entry.forEach(mood => {
            if (mood.mood.label === moodValue) {
                moodMatch.push(mood)
            }
        })
        addToDOM.renderJournalEntries(moodMatch)
        entryEventListener()
    })
}

const entryEventListener = () => {
    const entryList = document.querySelector(".entrylog")
    entryList.addEventListener("click", deleteOrEditJournalEntry)
}

const deleteOrEditJournalEntry = (event) => {
    if (event.target.id.startsWith("deleteEntry--")) {
        const entryId = event.target.id.split("--")[1]
        API.deleteEntry(entryId)
            .then(() => {
                document.querySelector(".entrylog").removeEventListener("click", deleteOrEditJournalEntry)
                showByMood()
            })
    } else if (event.target.id.startsWith("editEntry--")) {
        const entryId = event.target.id.split("--")[1]
        const numberId = Number(entryId)
        document.querySelector(".entrylog").removeEventListener("click", deleteOrEditJournalEntry)
        editJournalEntry(numberId)
    }
}

const editJournalEntry = (objId) => {
    const entryList = document.querySelector(".entrylog")
    entryList.innerHTML = ""
    const date = document.querySelector("#journalDate")
    const concepts = document.querySelector("#journalConcepts")
    const entry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#journalMood")
    const hideyId = document.querySelector("#entryId")
    API.getJournalEntries().then(entries => {
        entries.forEach(journalEntry => {
            if (journalEntry.id === objId) {
                date.value = journalEntry.date
                concepts.value = journalEntry.concepts
                entry.value = journalEntry.entry
                mood.value = journalEntry.moodId
                hideyId.value = journalEntry.id
            }
        })
    })
}

const saveButton = document.querySelector(".journalRecord")
saveButton.addEventListener("click", saveEntry)

const moodArea = document.querySelector(".radioField")
moodArea.addEventListener("click", showByMood)