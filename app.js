const utils = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');


//add
yargs.command({
    command : 'add',
    describe : 'Add A New Note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler:
    (argv) => {
            utils.addNote(argv.title, argv.body);
            
    }
});

//remove
yargs.command({
    command : 'remove',
    describe : 'Remove A New Note',
    builder : {
        title: {
        describe: 'Note Title To Delete'
        }
    },
    handler:
    (argv) => {
        utils.removeNote(argv.title);
        // console.log('Ruminess ASS !!!!!!!!!!!!!!!');
    }
});

//read a note
yargs.command({
    command : 'read',
    describe : 'Read A Note',
    builder: {
        title: {
            describe: 'Note to read'
        }
    },
    handler:
    (argv) => {
        utils.readNote(argv.title);
    }
});


//list notes
yargs.command({
    command : 'list',
    describe : 'List All Notes',
    handler:
    () => {
        console.log(utils.listNotes());
    }
});


yargs.parse();