import htmlStuff from "./entryComponent.js"

const addToDOM = {
    renderJournalEntries (entries) {
        htmlStuff.myEntries.innerHTML = ""
        entries.forEach(entry => {
            const journHtml = htmlStuff.logEntry(entry)
            htmlStuff.myEntries.innerHTML += journHtml 
        });
    }
}

export default addToDOM;