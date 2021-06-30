import {
	forSubmitHandler,
	closeBtnClickHandler,
	markContainer,
	countTasks,
	addTask,
	checkBtnClickHandler

}	from './functions.js'

import {
	formAddTask,
	taskList
} from './vars.js'

formAddTask.addEventListener('submit',forSubmitHandler );
taskList.addEventListener('click', closeBtnClickHandler);
taskList.addEventListener('click', checkBtnClickHandler);


// read data
for (let key in localStorage) {
	if (localStorage.hasOwnProperty(key)) {
		const task = JSON.parse(localStorage[key]);
		addTask(task);
	}
}

markContainer();
countTasks();

