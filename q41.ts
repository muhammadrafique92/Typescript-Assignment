let magicians = ['Samri','Hamoon','Bil Batori','Zakoota','Nastoor']

function show_magicians(magicians){
    console.log('Magicians are:')
    for(let i in magicians){
        console.log(magicians[i])
    }
}

show_magicians(magicians);