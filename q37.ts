function make_shirt(size='large',msg='I love Typescript'){
    console.log('-----------------------make_shirt function----------------------------')

    if(size == 'medium' || size == 'large'){
        msg = 'I Love Typescript'
    }

    console.log('The size is: ' + size + '\n and message on shirt is: "' + msg  +'"')
}
/*
The size is: 'size'
and message on shirt is: "message will be quoted"
*/

make_shirt('small','Just do it')
make_shirt('medium','Just do it')
make_shirt('large','Lost in the thought')

make_shirt()