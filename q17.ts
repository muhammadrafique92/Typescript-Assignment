let names = ['Gulzar','Imran Khan','Zia Khan','Abdul Qadeer Khan','Qudratullah Shahab','Ali Muhammad Khan','Qasim Khan','Saira Bano','Aitzaz Ahsan'];

let nguests = names.length;
for (let index = 0; index < nguests - 2; index++) {
    const element = names.pop();
    console.log('Sorry! dear '+element+ ',' + ' dinner program is canceled.');    
}

let guestCount = names.length;
for (let index = 0; index < guestCount; index++) {
    const element = names.pop();
    console.log('Hello! dear ' + element+ ',' + ' Please come to serana hotel tonight for dinner.');
}

console.log('length of names array: ' + names.length);