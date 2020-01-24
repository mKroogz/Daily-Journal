const addToDOM = {
    renderJournalEntries (entries) {
        entries.forEach(entry => {
            htmlStuff.myEntries.innerHTML += htmlStuff.logEntry(entry)
        });
    }
}