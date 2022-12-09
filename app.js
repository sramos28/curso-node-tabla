const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
/*
const tablaMultiplicar=()=>{

    for (let index = 1; index <= 10; index++) {
        let valor = 5*index;
        console.log('5X',index,'=',valor);
    }
}*/

//tablaMultiplicar();

//const base = 20;

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.base);
/*
const [,,arg3='base=5'] = process.argv;
const [,base] = arg3.split('=');

console.log(base);*/


crearArchivo(argv.base,argv.listar,argv.h)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err));

/*
fs.writeFileSync('tabla-6.txt',salida,(err)=>{
    if (err) {
        throw err;
    }

    console.log('tabla-6.txt creada');
})*/

