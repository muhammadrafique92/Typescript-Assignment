function makeCar(manufacturer,model,properties){
    let result ={
        make : manufacturer,
        model : model
    };

    if(properties && Object.keys(properties).length > 0){
        result['features'] = properties
    }
    return result;
}

console.log(makeCar('suzuki','alto'))
console.log(makeCar('honda','civic',{}))
console.log(makeCar('toyota','yaris',{color:'white',power:1300}))
console.log(makeCar('kia','sportage',{color:'white',power:2500,type:'suv'}))