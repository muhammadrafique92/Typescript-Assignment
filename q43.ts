let magicians = ['Samri','Hamoon','Bil Batori','Zakoota','Nastoor'];

function show_magicians(magicians){
    console.log('Magicians are:')
    for(let i in magicians){
        console.log(magicians[i])
    }
}

function make_great(magicians){
    let great_magicians = [];
    for(let i in magicians){
        let element = magicians[i];
        great_magicians[i] = 'Great ' + element;
    }
    return great_magicians;
}

show_magicians(make_great(magicians));
console.log('-----------------------------------------');
show_magicians(magicians);