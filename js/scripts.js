/* Script per gestire lo stato della todo list salvandolo nel localStorage */
/* Molto basic e con nessun fallback, non è best practice ne sono consapevole, ma ho già impiegato più tempo del dovuto per questo risultato */

document.addEventListener("DOMContentLoaded", () => {
    const rawStates = localStorage.getItem("todoStates");
    //console.log("rawStates dal localStorage:", rawStates);

    let todoStates;
    if (rawStates === null) {
        todoStates = {};
    } else {
        todoStates = JSON.parse(rawStates);
    };
    //console.log("todoStates dal localStorage:", todoStates);
    const checks = document.querySelectorAll(".todo-check");

    checks.forEach(check => {
        const id = check.id;
        const savedState = todoStates[id];
        if (savedState) {
            check.checked = true;
            const row = check.closest(".todo-item");
            row.classList.add("completed");
        }
    });

    checks.forEach(check => {
        check.addEventListener("change", () => {
            const row = check.closest(".todo-item");
            row.classList.toggle("completed", check.checked);
            const id = check.id;
            todoStates[id] = check.checked;
            localStorage.setItem("todoStates", JSON.stringify(todoStates));
        });
    });
});