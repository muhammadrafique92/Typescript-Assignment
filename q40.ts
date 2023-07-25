function make_album(artist,title,ntracks){
    let album = {
        artist : artist,
        title : title,
    }
    if(ntracks != undefined){
        album['tracks'] = ntracks;
    }
    return album;
}

console.log(make_album('nusrat','qawalis'))
console.log(make_album('Junaid Jamshed','Dil Dil Pakistan'))
console.log(make_album('Atta Ullah Khan','folk tales'))

console.log(make_album('Various artists','Hits 2023',7))



