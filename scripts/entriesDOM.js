const element = (comp, text, classes) => `<${comp} class="${classes}">${text}</${comp}>`

const logEntry = jEntry => {
    return `
    <section class="jEntry">
    ${element("div", `Date: ${jEntry.date}`, "date")}
    ${element("div", `Concepts covered: ${jEntry.concepts}`, "concepts")}
    ${element("div", `Entry: ${jEntry.entry}`, "entryText")}
    ${element("div", `Mood: ${jEntry.mood}`, "mood")}
    </section>`
}

const myEntries = document.querySelector(".entrylog")
