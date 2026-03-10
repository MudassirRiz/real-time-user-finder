const users = [
  {
    name: "Arjun Mehta",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Frontend developer who loves creating modern UI designs and learning new web technologies.",
  },
  {
    name: "Riya Sharma",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "UI/UX designer passionate about crafting beautiful and user-friendly digital experiences.",
  },
  {
    name: "Kabir Singh",
    photo:
      "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Full stack developer interested in building scalable web applications and APIs.",
  },
  {
    name: "Neha Kapoor",
    photo:
      "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Content creator and tech enthusiast who enjoys sharing knowledge about coding.",
  },
  {
    name: "Aman Verma",
    photo:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Software engineering student exploring JavaScript, React, and modern web development.",
  },
];

let cards = document.querySelector(".cards");

function showUsers(arr) {
  arr.forEach(function (user) {
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = user.photo;
    img.className = "bg-img";

    let blurr = document.createElement("div");
    blurr.style.backgroundImage = `url(${user.photo})`;
    blurr.className = "blurred-layer";

    let content = document.createElement("div");
    content.className = "content";

    let heading = document.createElement("h3");
    heading.innerText = user.name;

    let para = document.createElement("p");
    para.innerText = user.bio;

    content.appendChild(heading);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurr);
    card.appendChild(content);

    cards.appendChild(card);
  });
}

showUsers(users);

let inputName = document.querySelector(".inp");

inputName.addEventListener("input", function () {
  let newUser = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inputName.value.toLowerCase());
  });

  cards.innerHTML = "";   // old cards remove
  showUsers(newUser);     // filtered users show
});
