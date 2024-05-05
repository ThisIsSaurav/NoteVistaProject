// addNoteBtn = document.getElementById("addNoteBtn");
const newNoteTitle = document.getElementById("newNoteTitle")
const newNote = document.getElementById("newNote")
const noteTitle = document.getElementsByClassName("noteTitle")
const note = document.getElementsByClassName("note")
const noteCard = document.getElementsByClassName("noteCard")

const myAllNotesSection = document.getElementById("myAllNotesSection")
let cardCount = myAllNotesSection.childElementCount;




addNoteBtn.addEventListener("click", () => {

    if (newNoteTitle.value == " " && newNote.value == " ") {
        document.getElementById("warningContainer").classList.toggle("hidden");
    }
    else{
            
    cardCount++;
            const cardHTML = `
    <textarea name="noteTitle" class="noteTitle" id="note_${cardCount}_title" cols="30" rows="10" readonly >${newNoteTitle.value}</textarea>
    <textarea name="note" class="note" cols="30" id="note_${cardCount}" rows="10" readonly>${newNote.value}</textarea>
    <div class="myNoteBtns">
        <button id="deleteNoteBtn-${cardCount}" title="Delete" onclick="deleteMyNote(this.id)"><img src="../static/img/recycle-bin-icon.webp" alt=""></button>
        <button id="editNoteBtn-${cardCount}" title="Edit" <img src="../static/img/pencil-icon.webp" alt=""></button>
        <button id="copyNoteBtn-${cardCount}" title="Copy" onclick = "copyNoteContent(this.id)"><img src="../static/img/copy-icon.webp" alt=""></button>
        </div>`

            const cardDiv = document.createElement("div")
            cardDiv.setAttribute("class", "noteCard")
            cardDiv.setAttribute("id", `noteCard-${cardCount}`)
            cardDiv.innerHTML = cardHTML
            console.log(cardDiv);
            myAllNotesSection.append(cardDiv)

            newNoteTitle.value = " "
            newNote.value = " "
        }
    
    })

// Go back button event listener to hide the warning container
document.getElementById("goBackBtn").addEventListener("click", () => {
    // Hide the warning container
    document.getElementById("warningContainer").classList.add("hidden");
});


function deleteMyNote(id) {
    // Extract the card number from the id of the delete button
    let cardNumber = parseInt(id.slice(14));

    // Find the note card element to be deleted
    let noteCardToDelete = document.getElementById(`noteCard-${cardNumber}`);

    // Remove the note card from the DOM
    if (noteCardToDelete) {
        noteCardToDelete.remove();
        console.log("Note deleted successfully.");
    } else {
        console.log("Note card not found.");
    }
}

// Function to handle copying note content and title to clipboard
function copyNoteContent(id) {
    cardNumber = parseInt(id.slice(12));
    // Find the note title and content textarea elements
    let noteTitle = document.getElementById(`note_${cardNumber}_title`);
    let noteContent = document.getElementById(`note_${cardNumber}`);
    
    // Construct the text to be copied (title + content)
    let textToCopy = `Title:-${noteTitle.value}\nNote:-${noteContent.value}`;
    
    // Create a textarea element to hold the text to be copied
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    
    // Append the textarea to the document
    document.body.appendChild(tempTextarea);
    
    // Select the text in the textarea
    tempTextarea.select();
    
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextarea);
    
    console.log("Note content and title copied to clipboard.");
}


// Add event listener for edit buttons

