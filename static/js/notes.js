// addNoteBtn = document.getElementById("addNoteBtn");
const newNoteTitle = document.getElementById("newNoteTitle")
const newNote = document.getElementById("newNote")
const noteTitle = document.getElementsByClassName("noteTitle")
const note = document.getElementsByClassName("note")
const noteCard = document.getElementsByClassName("noteCard")

const myAllNotesSection = document.getElementById("myAllNotesSection")
let cardCount = myAllNotesSection.childElementCount;
console.log(cardCount);

addNoteBtn.addEventListener("click",()=>{
    cardCount++;
    const cardHTML = `
    <div class="noteCard" id="noteCard-${cardCount}">
    <textarea name="noteTitle" class="noteTitle" id="note_${cardCount}_title" cols="30" rows="10" readonly >${newNoteTitle.value}</textarea>
    <textarea name="note" class="note" cols="30" id="note_${cardCount}" rows="10" readonly>${newNote.value}</textarea>
    <div class="myNoteBtns">
        <button id="deleteNoteBtn-${cardCount}" title="Delete" onclick="deleteMyNote(this.id)"><img src="img/recycle-bin-icon.webp" alt=""></button>
        <button id="editNoteBtn-${cardCount}" title="Edit"><img src="img/pencil-icon.webp" alt=""></button>
        <button id="pinNoteBtn-${cardCount}" title="Copy"><img src="img/copy-icon.webp" alt=""></button>
        </div>
        </div>`
        
    const div = document.createElement("div")
    //TASK-1
    //It showing me my cardHTML inside a div which i have to solve
    div.innerHTML = cardHTML
    myAllNotesSection.append(div)
    console.log(cardCount);
})
//TASK-2
//mereko ko delete button kaam krwana hai jiske liye uper diya task hona chayiye

function deleteMyNote(id) {
    let cardNumber = id.slice(14)
    
}