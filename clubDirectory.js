const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
fetch("Clubs - Clubs_Raw.csv")
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

      });

      buttonContainer.appendChild(btn);
    });
  });