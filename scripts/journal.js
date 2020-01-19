const journalEntry = {
    date: "2020-01-17",
    concepts: "JS stuff",
    entry: "Today we went more into detail on objects, functions and methods in Javascript",
    mood: "Happy"
}
const entryLog = []
entryLog.push(journalEntry)

const newEntry = {
    date: "1999-12-31",
    concepts: "Milleniums",
    entry: "New Millenium at midnight!!!!",
    mood: "Excited"
}

const newEntry2 = {
    date: "2020-01-06",
    concepts: "NSS and Introductions",
    entry: "Today we met everyone at NSS",
    mood: "Good"
}
entryLog.push(newEntry)
entryLog.push(newEntry2)
console.log(entryLog)