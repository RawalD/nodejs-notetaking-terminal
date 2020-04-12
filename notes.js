const fs = require('fs'); 

const getNotes = function (note = '') {
    return  `Your notes... ${note}`
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const dupsArr = notes.filter((note) => {
        return note.title === title
    });

if (dupsArr.length === 0) {
    notes.push(
        {
            title: title,
            body: body
        }
    );

   saveNotes(notes);
   console.log('New Note Added');
} 
else {
    console.log('Note Title Taken');
}

};


const saveNotes = function (notes) {
    const notesStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesStr);
}

const removeNote = (title) => {
    const notes = loadNotes();
    
    
    const matchingArr = notes.filter((note)=>{
        return note.title !== title;
    });

    if(matchingArr.length === 0){
        console.log('NO');
    }
    // console.log(matchingArr);
    saveNotes(matchingArr);
    
  
    //console.log(title);
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataBufferStr = dataBuffer.toString();
    
        return JSON.parse(dataBufferStr);
    }

    catch (e){
        return [];
    }
}

const listNotes = () => {
    return loadNotes();
}

const readNote = (title) => {
    const notes = loadNotes();

   const read = notes.filter((note) => {
        return note.title === title
    });

    console.log(read);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};