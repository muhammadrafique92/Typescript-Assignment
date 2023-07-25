let magicians = ['Samri','Hamoon','Bil Batori','Zakoota','Nastoor'];

function show_magicians(magicians){
    console.log('Magicians are:')
    for(let i in magicians){
        console.log(magicians[i])
    }
}

function make_great(magicians){
    for(let i in magicians){
        let element = magicians[i];
        magicians[i] = 'Great ' + element;
    }
}

make_great(magicians);
show_magicians(magicians);