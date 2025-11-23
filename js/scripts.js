document.addEventListener("DOMContentLoaded", () => {
  const checks = document.querySelectorAll(".todo-check");

  checks.forEach(check => {
    check.addEventListener("change", () => {
      const row = check.closest(".todo-item");
      row.classList.toggle("completed", check.checked);
    });
  });
});

/**TODO implementare localstorage  */