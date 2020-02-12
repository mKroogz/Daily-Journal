import htmlStuff from "./entryComponent.js"

const addToDOM = {
    renderJournalEntries (entries) {
        htmlStuff.myEntries.innerHTML = ""
        entries.forEach(entry => {
            const journHtml = htmlStuff.logEntry(entry)
            htmlStuff.myEntries.innerHTML += journHtml 
        });
    }, 
    renderMoods (moods) {
        let moodDOM = `<label for="journalMood">Mood</label>
        <select name="journalMood" id="journalMood">`
        moods.forEach(mood => {
            moodDOM += htmlStuff.createMoods(mood)
        })
        moodDOM += `</select>`
        htmlStuff.myMoods.innerHTML = moodDOM
    }
}

export default addToDOM;