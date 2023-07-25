let current_users=['Jhon','Eric','Adam','Wasi','Micheal']

let new_users=['jhon','eric','Ali','kashif','Micheal']


for(let i in current_users){
    current_users[i] = current_users[i].toLowerCase()
}

for(let i in new_users){
    new_users[i] = new_users[i].toLowerCase()
}



for (let i in new_users){
    const user = new_users[i];

    if (current_users.indexOf(user)>=0){
        console.log('user name ' + user + ' already taken')
    }
    else{ 
        console.log('user name ' + user + ' is available')
    }
 
}