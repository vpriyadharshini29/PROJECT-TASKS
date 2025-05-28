document.addEventListener("DOMContentLoaded", function () {
  const calendarTitle = document.querySelector(".calendar strong");
  const prevBtn = document.querySelector(".fa-chevron-left").closest("button");
  const nextBtn = document.querySelector(".fa-chevron-right").closest("button");
  const calendarTable = document.querySelector(".calendar table tbody");
  const upcomingContainer = document.querySelector(".col-md-6:nth-child(2) .mt-3");
  const viewAllLink = document.querySelector(".col-md-6:nth-child(2) a");

  let currentDate = new Date();
  let events = [];

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();

    calendarTitle.textContent = `${date.toLocaleString("default", { month: "long" })} ${year}`;
    calendarTable.innerHTML = "";

    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    let row = document.createElement("tr");
    for (let i = 0; i < firstDayIndex; i++) {
      row.innerHTML += "<td></td>";
    }

    for (let day = 1; day <= lastDate; day++) {
      const current = new Date(year, month, day);
      const cell = document.createElement("td");

      const isToday = current.toDateString() === today.toDateString();

      if (isToday) {
        cell.innerHTML = `<span class="highlight-day">${day}</span>`;
      } else {
        cell.textContent = day;
      }

      if (current >= new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
        cell.classList.add("clickable-date");
        cell.style.cursor = "pointer";
        cell.addEventListener("click", () => handleDateClick(current));
      } else {
        cell.style.color = "#ccc";
      }

      row.appendChild(cell);
      if ((firstDayIndex + day) % 7 === 0) {
        calendarTable.appendChild(row);
        row = document.createElement("tr");
      }
    }

    if (row.children.length > 0) calendarTable.appendChild(row);
  }

  function handleDateClick(date) {
    const title = prompt("Enter Event Title:");
    const time = prompt("Enter Time (HH:MM in 24hr format):");

    if (!title || !time) {
      alert("Both title and time are required.");
      return;
    }

    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });

    const eventData = {
      title,
      time,
      day: formattedDate.split(",")[0],
      fullDate: formattedDate.replace(",", "")
    };

    events.unshift(eventData);
    renderEvents();
  }

  function renderEvents(showAll = false) {
    upcomingContainer.innerHTML = "";

    const visibleEvents = showAll ? events : events.slice(0, 5);

    visibleEvents.forEach((event, index) => {
      const eventCard = document.createElement("div");
      eventCard.className = "meeting-card mb-3 d-flex justify-content-between align-items-center";

      eventCard.innerHTML = `
        <span>${event.title} - ${event.time}</span>
        <div class="text-end">
          <strong>${event.day}</strong><br><small>${event.fullDate}</small>
          <br><button class="btn btn-sm btn-danger mt-1 delete-btn">Delete</button>
        </div>
      `;

      eventCard.querySelector(".delete-btn").addEventListener("click", () => {
        events.splice(index, 1);
        renderEvents(currentlyViewingAll);
      });

      upcomingContainer.appendChild(eventCard);
    });
  }

  let currentlyViewingAll = false;

  viewAllLink.addEventListener("click", function (e) {
    e.preventDefault();
    currentlyViewingAll = !currentlyViewingAll;
    viewAllLink.textContent = currentlyViewingAll ? "Show Less" : "View All";
    renderEvents(currentlyViewingAll);
  });

  prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
  renderEvents();
});
// Attach delete event to initial HTML meetings
document.querySelectorAll(".delete-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    this.closest(".meeting-card").remove();
  });
});
