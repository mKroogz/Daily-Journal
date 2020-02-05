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
    },
    editEntry(updatedObject, id){
        fetch(`http://localhost:3000/entryLog/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedObject)
    })
    .then(res => res.json())
    .then(() => {
        /*
            Since this is the point in the code where you KNOW
            the operation completed successfully, clear the
            value of the hidden input field to that your
            application is back to the state of creating instead
            of editing
        */
        document.querySelector("#entryId").value = ""
    })
    }
}

export default API