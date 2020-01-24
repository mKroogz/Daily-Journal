const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        myEntries.innerHTML += logEntry(entry)
    });
}