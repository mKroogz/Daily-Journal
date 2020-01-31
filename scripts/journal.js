import API from "./data.js"
import addToDOM from "./entriesDOM.js"

API.getJournalEntries().then(addToDOM.renderJournalEntries);