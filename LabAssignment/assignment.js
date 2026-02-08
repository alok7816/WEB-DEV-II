const eventList = document.getElementById("eventList");

function addEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("description").value;

  if (!title || !date) {
    alert("Please enter title and date");
    return;
  }

  createEvent(title, date, category, desc);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

function createEvent(title, date, category, desc) {
  const div = document.createElement("div");
  div.className = "event";

  div.innerHTML = `
    <button class="delete" onclick="this.parentElement.remove()">×</button>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span class="badge">${category}</span>
    <p>${desc || "lorem ipsum"}</p>
  `;

  eventList.appendChild(div);
}

function clearEvents() {
  eventList.innerHTML = "";
}

function addSample() {
  createEvent("Emifest", "2026-01-14", "Social", "lorem ipsum");
}