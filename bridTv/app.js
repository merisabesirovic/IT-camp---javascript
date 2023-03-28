const cardContainer = document.querySelector(".container");
async function getData() {
  const response = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  );
  const data = await response.json();
  console.log(data);
  console.log(data.Video[0]);
  data.Video.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "item1";
    const title = document.createElement("h2");
    title.textContent = item.name;
    const link = document.createElement("a");
    link.href = item.source.hd;
    const image = document.createElement("img");
    image.src = item.snapshots.sd;
    link.appendChild(image);
    link.appendChild(title);
    card.appendChild(link);
    cardContainer.appendChild(card);
    function pretvori(time) {
      let h = Math.trunc(time / 3600);
      let m = Math.trunc((time % 3600) / 60);
      let s = time - (h * 3600 + m * 60);
      if (m > 9 && s > 9) return `0${h}:${m}:${s}`;
      else if (m > 9 && s <= 9) return `0${h}:${m}:0${s}`;
      else if (m <= 9 && s > 9) return `0${h}:0${m}:${s}`;
      else return `0${h}:0${m}:0${s}`;
    }
    let duration = document.createElement("p");
    duration.textContent = pretvori(Number(item.duration));
    card.appendChild(duration);
  });
}

getData();
