const htmlStuff = {
    element (comp, text, classes) { return `<${comp} class="${classes}">${text}</${comp}>`},
    
    logEntry (jEntry) {
        return `
        <section class="jEntry">
        ${this.element("div", `Date: ${jEntry.date}`, "date")}
        ${this.element("div", `Concepts covered: ${jEntry.concepts}`, "concepts")}
        ${this.element("div", `Entry: ${jEntry.entry}`, "entryText")}
        ${this.element("div", `Mood: ${jEntry.mood.label}`, "mood")}
        <button type="button" class="deleteButton" id="deleteEntry--${jEntry.id}">Delete</button>
        <button type="button" class="editButton" id="editEntry--${jEntry.id}">Edit</button>
        </section>`
    },

    createMoods (mood) {
        return `<option value=${mood.id}>${mood.label}</option>`
    },
    
    myEntries: document.querySelector(".entrylog"),

    myMoods: document.querySelector(".journalMoods")

}

export default htmlStuff