//API Object
const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entryLog?_expand=mood")
            .then(response => response.json())
    },
    getMoods() {
        return fetch("http://localhost:8088/moods")
            .then(response => response.json())
    },
    createJournalEntry(newJournalEntry) {
        return fetch("http://localhost:8088/entryLog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    },
    deleteEntry(id){
        return fetch(`http://localhost:8088/entryLog/${id}`, {
            method: "DELETE"
        })
    },
    editEntry(updatedObject, id){
        fetch(`http://localhost:8088/entryLog/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    })
    .then(res => res.json())
    .then(() => {
        document.querySelector("#entryId").value = ""
    })
    }
}

export default API