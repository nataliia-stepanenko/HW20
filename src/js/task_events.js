
export function removeToDo (event) {
    let isRemoveButton = event.target.classList.contains('del-button');
    if (isRemoveButton){
        let li = event.target.closest('.task');
        li.remove();
    }
}

export function fulfillToDo(event) {
    let isCheckedBox = event.target.className === "box";
    if (isCheckedBox) {
        let li = event.target.closest('.task');
        li.classList.add('fulfilled');

        let checked = li.firstChild;
        checked.setAttribute('disabled', 'true');
        let pressed = li.lastChild;
        pressed.setAttribute('disabled', 'true');
    }
}