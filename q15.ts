let x = ['Imran Khan', 'Zia Khan', 'Abdul Qadeer Khan', 'Ali Muhammad Khan', 'Qasim Khan','Saira Bano'];

for (let index = 0; index < x.length; index++)

{
    if(x[index]=='Saira Bano'){
       x[index]='Aitzaz Ahsan'
}
    
console.log('Hello! dear ' + x[index] + ',' + ' Please come to serana hotel tonight for dinner.');

}

console.log('Saira Bano is not available for dinner');