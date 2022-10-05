"use strict"

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import { removeToDo, fulfillToDo } from "./task_events.js";

const ul = document.getElementById('list');
const form = document.forms['task-form'];
const { input} = form;
const errorMessage = document.createElement('div');

form.addEventListener('submit', handleSubmit);
input.addEventListener('focus', removeError);
ul.addEventListener('click', removeToDo);
ul.addEventListener('change', fulfillToDo);

function addToDo (value){
    const li = document.createElement('li');
    li.innerHTML = value;
    li.classList.add('task');
    ul.append(li);

    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete';
    delBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'del-button');
    li.append(delBtn);

    const doneBox = document.createElement('input');
    doneBox.setAttribute('type', 'checkbox');
    doneBox.classList.add('box');
    li.prepend(doneBox);
}

function handleSubmit(event) {
    event.preventDefault();
    if (input.value.trim() === "") {
        input.classList.add('error');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'Please, enter a valid task';
        form.after(errorMessage);
        return;
    }
    addToDo(input.value);
    input.value = '';
    input.focus();
}

function removeError() {
     if (input.classList.contains('error')) {
         input.classList.remove('error');
         errorMessage.innerHTML = '';
    }
}
