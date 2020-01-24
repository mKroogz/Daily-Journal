const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entryLog")
            .then(response => response.json())
    }
}