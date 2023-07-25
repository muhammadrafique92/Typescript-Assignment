let cities = ['Karachi', 'Lahore', 'Quetta', 'Peshawar', 'Naran', 'Gilgit'];

console.log('cities list used for comparisons');
console.log(cities);
console.log('=============================================');

if(cities[0] == 'karachi'){
    console.log('karachi exists in cities list');
}

if(cities[0].toLowerCase() == 'karachi'){
    console.log('karachi exists in cities list when compared using tolowercase()');
}

if(cities.indexOf('Naran') > 0){
    console.log('Naran exists in cities list');
}

if(cities.indexOf('Faisalabad') == -1){
    console.log('Faisalabad does not exist in cities list')
}

if(cities.length == 6){
    console.log('there are 6 cities in the list');
}

if(cities.indexOf('Karachi') != -1 && cities.indexOf('Gilgit') != -1){
    console.log('Karachi and Naran both exist in cities list');
}

if(cities.indexOf('Lahore') != -1 || cities.indexOf('Sahiwal') != -1){
    console.log('Either Lahore or Sahiwal exist in cities list');
}

if(cities.length < 10){
    console.log('there are less than 10 cities in cities list');
}

