const htmlStuff = {
    element (comp, text, classes) { return `<${comp} class="${classes}">${text}</${comp}>`},
    
    logEntry (jEntry) {
        return `
        <section class="jEntry">
        ${this.element("div", `Date: ${jEntry.date}`, "date")}
        ${this.element("div", `Concepts covered: ${jEntry.concepts}`, "concepts")}
        ${this.element("div", `Entry: ${jEntry.entry}`, "entryText")}
        ${this.element("div", `Mood: ${jEntry.mood}`, "mood")}
        </section>`
    },
    
    myEntries: document.querySelector(".entrylog")
}