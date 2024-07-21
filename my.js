document.addEventListener("DOMContentLoaded", function () {
  loadNotes();
});

function openTab(evt, tabName) {
  var i, tabcontent, tabbuttons;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function highlightText() {
  var notesField = document.getElementById("notes");
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var selectedText = range.toString();
  var color = document.getElementById("colorPicker").value;

  if (selectedText !== "") {
    var span = document.createElement("span");
    span.style.backgroundColor = color;
    span.textContent = selectedText;
    range.deleteContents();
    range.insertNode(span);
  }
}

function saveNotes() {
  var notes = document.getElementById("notes").innerHTML;
  localStorage.setItem("notes", notes);
  alert("Заметки сохранены!");
}

function loadNotes() {
  var savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    document.getElementById("notes").innerHTML = savedNotes;
  }
}

function clearNotes() {
  document.getElementById("notes").innerHTML = "";
  localStorage.removeItem("notes");
  alert("Заметки очищены!");
}

// Загрузка заметок при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  openTab(event, "tab1");
  loadNotes();
});
// Функция для сохранения заметок в локальное хранилище
function saveJSNotes() {
  const jsNotes = document.getElementById("jsNotes").innerHTML;
  localStorage.setItem("jsNotes", jsNotes);
}

// Функция для загрузки заметок из локального хранилища
function loadJSNotes() {
  const savedNotes = localStorage.getItem("jsNotes");
  if (savedNotes) {
    document.getElementById("jsNotes").innerHTML = savedNotes;
  }
}

// Функция для очистки заметок
function clearJSNotes() {
  document.getElementById("jsNotes").innerHTML = "";
  localStorage.removeItem("jsNotes");
}

// Вызов функции загрузки заметок при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  loadJSNotes();
});

// Функция для изменения цвета текста
function changeTextColor(color) {
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("foreColor", false, color);
}

// Функция для обновления выделения при выборе цвета
function updateSelection() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const textNode = range.startContainer;
    if (textNode.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.style.color = document.queryCommandValue("foreColor");
      range.surroundContents(span);
    }
  }
}
