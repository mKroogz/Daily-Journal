const journalEntry = {
    date: "2020-01-17",
    concepts: "JS stuff",
    entry: "Today we went more into detail on objects, functions and methods in Javascript",
    mood: "Happy"
}

const getEntries = () => {
    const url = "http://localhost:3000/entryLog"
    fetch(url)
    .then(response => response.json())
    .then(myParsedEntries => {
        renderJournalEntries(myParsedEntries)
    })
}

//DOM MOD SECTION BELOW

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
    entries.forEach(entry => {
        myEntries.innerHTML += logEntry(entry)
    });
}

getEntries()