var taskCount = 0;
//const TASKLIST = [];
//const IDLIST = [];
const COMPLETELIST = [];

function addTask(event) {
    //Evita que el formulario se envíe y recarge la página
    event.preventDefault();

    // Obtener el valor del elemento <input> con el id "taskInput"

    var taskInput = document.getElementById("taskInput").value;
    // Verificar que taskInput no se encuentre vacío


    if(taskInput) {
        //Incrementar número de tareas
        taskCount++;

        COMPLETELIST.push({id: taskCount, description: taskInput, completed:false});

        //Buscar id taskTable
        var taskTable = document.getElementById("taskTable");

        //Crea una fila y la adhiere al final de la tabla
        var row = taskTable.tBodies[0].insertRow(-1);
        // Crear dos nuevas celdas y las agrega a la fila

        var idCell = row.insertCell(0);
        var taskCell = row.insertCell(1);
        var completeCell = row.insertCell(2);

        //Asigna el número de tareas a la primera celda
        idCell.textContent = taskCount;
        //Asigna la tarea del elemento <input>
        taskCell.textContent = taskInput.toLowerCase();

        /*Asigna la condición de la tarea
        completeCell.textContent = false;*/

        // Create a checkbox and append it to the third cell
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false; // Unchecked by default
        checkbox.onchange = function() {
            COMPLETELIST[taskCount - 1].completed = checkbox.checked;
        };
        completeCell.appendChild(checkbox);

        //Almacenar valores de Entrada
        //TASKLIST.push(taskInput);
        //IDLIST.push(taskCount);

        console.log(COMPLETELIST);
       /*console.log(TASKLIST);
        console.log(IDLIST);*/


       //Limpiar la barra <input>
       document.getElementById("taskInput").value = '';

       idCell.setAttribute('align', 'center');
       taskCell.setAttribute('align', 'center');
       completeCell.setAttribute('align', 'center');

       // Actualizar el contenido del elemento con id="totalTask"
        updateTaskCount();
    }
}

function updateTaskCount() {
    const totalTaskElement = document.getElementById("totalTask");
    totalTaskElement.innerHTML = `Total: ${COMPLETELIST.length}`;
}
