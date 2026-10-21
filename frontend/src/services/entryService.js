import api from "./api";

async function createNewEntry(entryData) {
    const response = await api.post("/entries", entryData);
    return response.data;
}
async function getAllEntries() {
    const response = await api.get("/entries");
    return response.data;
}
async function getMyEntries() {
    const response = await api.get("/entries/my-entries");
    return response.data;
}


export { createNewEntry, getAllEntries, getMyEntries };
