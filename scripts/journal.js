const journalEntry = {
    date: "2020-01-17",
    concepts: "JS stuff",
    entry: "Today we went more into detail on objects, functions and methods in Javascript",
    mood: "Happy"
}
const entryLog = []
entryLog.push(journalEntry)

const newEntry = {
    date: "1999-12-31",
    concepts: "Milleniums",
    entry: "New Millenium at midnight!!!!",
    mood: "Excited"
}

const newEntry2 = {
    date: "2020-01-06",
    concepts: "NSS and Introductions",
    entry: "Today we met everyone at NSS",
    mood: "Good"
}
entryLog.push(newEntry)
entryLog.push(newEntry2)
console.log(entryLog)

const element = (comp, text, classes) => `<${comp} class="${classes}">${text}</${comp}>`

const logEntry = jEntry => {
    return `
    <section class="jEntry">
    ${element("div", `Date: ${jEntry.date}`, "date")}
    ${element("div", `Concepts covered: ${jEntry.concepts}`, "concepts")}
    ${element("div", `Entry: ${jEntry.entry}`, "entryText")}
    ${element("div", `Mood: ${jEntry.mood}`, "mood")}
    </section>`
}

const myEntries = document.querySelector(".entrylog")
const renderJournalEntries = (entries) => {
    entryLog.forEach(entry => {
        myEntries.innerHTML += logEntry(entry)
    });
}

// Invoke the render function
console.log(myEntries)
renderJournalEntries(entryLog)