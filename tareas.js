const fs = require('fs');

function leerArchivoJSON() {
    if (fs.existsSync('./tareas.json')) {
        const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(tareasJson);
    }

    return [];
}


function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./tareas.json', tareasJson);
}

module.exports = { 
    listar() {
        let tareas = leerArchivoJSON();
        
        tareas.forEach(tarea => {
            console.log(tarea.titulo, '(' +  tarea.estado + ')');
        });
    },
    crear(titulo = '', descripcion = '', estado = 'Pendiente') {

        if (titulo.length > 5) {
    
            let tareas = leerArchivoJSON();
    
            let tareaNueva = {
                titulo: titulo,
                decripcion: descripcion,
                estado: estado
            }
            
            tareas.push(tareaNueva);
            
            escribirArchivoJSON(tareas);
            
            console.log('¡La tarea fue creada con éxito!')
    
        } else {
            console.log('Debes ingresar un título y debe contener como mínimo 5 carácteres');
        }
    
    }
}