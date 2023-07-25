let guests = ['Imran Khan', 'Zia Khan', 'Abdul Qadeer Khan', 'Ali Muhammad Khan', 'Qasim Khan','Saira Bano'];

guests.unshift('Gulzar');

guests.push('Aitzaz Ahsan');

guests.splice(4,0,'Qudratullah Shahab');

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    
console.log('Hello! dear ' + element+ ',' + ' Please come to serana hotel tonight for dinner.');

}




