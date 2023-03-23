// obtener elementos del DOM
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// función para agregar una tarea
function addTask() {
	// crear elemento de lista, checkbox y botón de eliminar
	var li = document.createElement("li");
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	var span = document.createElement("span");

	// agregar texto de tarea al elemento de lista
	li.innerText = taskInput.value;

	// agregar checkbox y botón de eliminar al elemento de lista
	li.insertBefore(checkbox, li.firstChild);
	span.innerText = "Eliminar";
	li.appendChild(span);

	// agregar tarea a la lista de tareas
	taskList.appendChild(li);

	// limpiar el campo de entrada de tarea
	taskInput.value = "";

	// agregar evento click para eliminar tarea
	span.onclick = function() {
		li.remove();
	};

	// agregar evento click para marcar tarea como completada
	checkbox.onclick = function() {
		li.classList.toggle("completed");
	};
}

// agregar evento click para agregar tarea
addButton.onclick = function() {
	addTask();
};