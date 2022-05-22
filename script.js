"use strict";

const form = document.getElementById("form");
const taskContainer = document.getElementById("tasks-container");
const title = document.getElementById("title");
const date = document.getElementById("date");
const priority = document.getElementById("priority");

class Task {
  constructor(title, date, priority) {
    this.title = title;
    this.date = date;
    this.priority = priority;
  }
}

class App {
  constructor() {
    form.addEventListener("submit", this.newTask.bind(this));
  }

  newTask(e) {
    e.preventDefault();

    const taskTitle = title.value;
    const taskDate = date.value;
    const taskPriority = priority.value;

    if (taskTitle === "" || taskDate === "" || taskPriority === "") {
      alert("Must complete all fields");
    } else {
      let newTaskEl = new Task(taskTitle, taskDate, taskPriority);

      const taskElement = document.createElement("div");
      taskElement.classList.add("task");

      //task priority
      if (taskPriority == "low") {
        taskElement.classList.add("low");
      }
      if (taskPriority == "medium") {
        taskElement.classList.add("medium");
      }
      if (taskPriority == "high") {
        taskElement.classList.add("high");
      }

      const newTaskTitle = document.createElement("input");
      newTaskTitle.classList.add("task-title");
      newTaskTitle.value = taskTitle;
      newTaskTitle.setAttribute("readonly", "readonly");

      const newTaskDate = document.createElement("div");
      newTaskDate.classList.add("task-date");
      newTaskDate.textContent = taskDate;

      //buttons
      const newEdit = document.createElement("button");
      newEdit.classList.add("edit");
      newEdit.textContent = "Edit";
      const newDelete = document.createElement("button");
      newDelete.classList.add("delete");
      newDelete.textContent = "Delete";

      //priority color

      //appending
      taskElement.appendChild(newTaskTitle);
      taskElement.appendChild(newTaskDate);
      taskElement.appendChild(newEdit);
      taskElement.appendChild(newDelete);
      taskContainer.appendChild(taskElement);

      //button functionality
      newEdit.addEventListener("click", () => {
        if (newEdit.textContent.toLowerCase() === "edit") {
          newTaskTitle.removeAttribute("readonly");
          newEdit.textContent = "Save";
        } else {
          newTaskTitle.setAttribute("readonly", "readonly");
          newEdit.textContent = "Edit";
        }
      });

      ///delete task////
      newDelete.addEventListener("click", () => {
        taskContainer.removeChild(taskElement);
      });
    }
    title.value = "";
    date.value = "";
  }
}

const app = new App();
