const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")

const main = async () => {
    let opt=1;
    do{
        opt = await inquirerMenu();
        switch(opt){
            case 1:
                console.log('Eligio la opcion 1');
                break;
            case 2:
                console.log('Eligio la opcion 2');
                break;
            default:
                console.log('Elija una opcion válida');
                break;
        }
        if(opt!=0){
            await pausa();
        }
    } while(opt!=0);  
}
main();