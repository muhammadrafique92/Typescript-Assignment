let users =['jhon','eric','adam','admin','Micheal']

for(let i in users){
    if(users[i] == 'admin'){
        console.log('Welcome admin!, Do you want to see the dashboard')
    }
    else{
        console.log('Welcome ' + users[i] + '!, How are you today')
    }
}