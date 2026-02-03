const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
fetch("Clubs - Clubs.csv")
  .then(response => response.text())
  .then(csvText => {
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true
    });

    parsed.data.forEach(club => {
      const img = new Image();
      img.src = `clubLogos/${club.logo.trim()}`; 
    });

    const buttonContainer = document.getElementById("clubButtons");
    const infoBox = document.getElementById("clubInfo");

    parsed.data.forEach(club => {
      const name = club.name;
      const description = club.description;
      const teacherName = club.teacherName;
      const logo = club.logo;
      const presidentName = club.presidentName
      const meetings = club.meetings
      const sponsorRoom = club.room

      const btn = document.createElement("button");
      btn.innerHTML = `
        <img src="clubLogos/${logo}" class="clubLogo"> <br>
        <span>${name}</span>
      `;

      btn.addEventListener("click", () => {

        infoBox.innerHTML = `
        <button class = "closeButton" id= "closeButton">✕</button>
          <h1>${name}</h1>
          <img src="clubLogos/${logo}" style="width:120px">
          <p>Description: ${description}</p>
          <ul>
            <li><strong>Meetings:</strong> ${meetings}</li>
            <li><strong>President:</strong> ${presidentName}</li>
            <li><strong>Sponsor:</strong> ${teacherName}, ${sponsorRoom}</li>
          </ul>
        `;
        infoBox.classList.add("show")
        overlay.classList.add("show");
        document.getElementById("closeButton").addEventListener("click", () => {
            infoBox.classList.remove("show");
            overlay.classList.remove("show");
        });
      });

      buttonContainer.appendChild(btn);
    });
    const overlay = document.getElementById("overlay");

  overlay.addEventListener("click", () => {
    infoBox.classList.remove("show");
    overlay.classList.remove("show");
  });
});






const headerBackground = document.querySelector('.header-background');

let scrollPosition = 0;
let menuOpen = false;

window.addEventListener("scroll", () => {
    if (window.innerWidth > 600) return;
    if (menuOpen) return;

    headerBackground.classList.toggle("show", window.scrollY > 50);
});

const bar = document.getElementById('bar');
const x = document.getElementById('x');
const overlay = document.querySelector('.overlay');
const body = document.body;

function openMenu() {
    scrollPosition = window.scrollY;
    menuOpen = true;

    body.style.top = `-${scrollPosition}px`;
    body.classList.add('no-scroll');

    headerBackground.classList.add('show');

    header.classList.add('open');
    overlay.classList.add('show');
}

function closeMenu() {
    menuOpen = false;

    header.classList.remove('open');
    overlay.classList.remove('show');

    body.classList.remove('no-scroll');
    body.style.top = '';

    headerBackground.classList.toggle("show", scrollPosition > 50);
}

bar?.addEventListener('click', openMenu);
x?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);
