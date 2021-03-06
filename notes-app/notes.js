const fs=require('fs')
const chalk = require('chalk')


const getNotes= function(){
    return "your notes.........."
}



const addNote=function(title,body){
const notes=loadNotes();
console.log(notes);

const duplicateNotes=notes.filter(function(note){
    return note.title===title
})

if(duplicateNotes.length===0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes);
    console.log('New note added!!!!!!!!!')
}

else{
    console.log('Awww!!!!!!note already taken')
}

}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes=function(){

    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }
   
}
const removeNote = function(title){
//console.log('title selected is ',title)
const notes=loadNotes()
const notesToKeep=notes.filter(function(note){
return note.title!==title
})
if(notesToKeep.length > notes.length){
    console.log(chalk.green.inverse('Note is removed!'))
}
else{
    console.log(chalk.red.inverse('No note found!!!!'))
}
saveNotes(notesToKeep)
}


module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}