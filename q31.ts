let users = ['jhon','eric','adam','admin','Micheal']

if(users.length == 0) {
    console.log('No users in the list. Empty list')
}
else{
    for(let i in users){
        if(users[i] == 'admin'){
            console.log('Welcome admin!, Do you want to see the dashboard')
        }
        else{
            console.log('Welcome ' + users[i] + '!, How are you today')
        }
    }
}