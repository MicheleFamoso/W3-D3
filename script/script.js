const myForm = document.querySelector("form")
myForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const Task = document.getElementById("Task")
  const Taskvera = Task.value
  const cont = document.createElement("div")
  cont.classList.add("taskcss")
  cont.innerHTML = `
  <p> • ${Taskvera}
  <button onclick="deletetask(event)">DELETE</button>
  </p>
  `
  const speriamo = document.getElementById("Contain")
  speriamo.appendChild(cont)
  cont.addEventListener("click", function () {
    this.classList.add("sottolinea")
  })

  Task.value = ""
})

const deletetask = function (e) {
  const pressedButton = e.target
  const taskToRemove = pressedButton.parentElement
  taskToRemove.remove()
}
