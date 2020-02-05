//API Object
const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entryLog")
            .then(response => response.json())
    },
    createJournalEntry(newJournalEntry) {
        return fetch("http://localhost:3000/entryLog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    },
    deleteEntry(id){
        return fetch(`http://localhost:3000/entryLog/${id}`, {
            method: "DELETE"
        })
    }
}

export default API