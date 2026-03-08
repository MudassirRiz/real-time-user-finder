const users = [
  {
    name: "Arjun Mehta",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Frontend developer who loves creating modern UI designs and learning new web technologies."
  },
  {
    name: "Riya Sharma",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UI/UX designer passionate about crafting beautiful and user-friendly digital experiences."
  },
  {
    name: "Kabir Singh",
    photo: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Full stack developer interested in building scalable web applications and APIs."
  },
  {
    name: "Neha Kapoor",
    photo: "https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Content creator and tech enthusiast who enjoys sharing knowledge about coding."
  },
  {
    name: "Aman Verma",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Software engineering student exploring JavaScript, React, and modern web development."
  }
];
//sare users show krna 
//filter karna har baaar input krne per 
//show krna filterred users ko


function showUsers(arr){
    arr.forEach(function(users){
        let card = document.createElement("div");
card.className ="card";

let img = document.createElement("img");
img.src =users.photo;

img.className ="bg-img";
let blurr = document.createElement("div");
blurr.style.backgroundImage= `url(${users.photo})`;
blurr.className ="blurred-layer";

let content = document.createElement("div");
content.className ="content";
let heading = document.createElement("h3");
heading.innerText = users.name;
let para = document.createElement("p");
para.innerText=users.bio;

content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blurr);
card.appendChild(content);

document.body.appendChild(card);

    });

} 
showUsers(users);

/* // card div
let card = document.createElement("div");
card.className = "card";

// image
let img = document.createElement("img");
img.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687";
img.className = "bg-img";

// blurred layer
let blur = document.createElement("div");
blur.className = "blurred-layer";

// content div
let content = document.createElement("div");
content.className = "content";

// h3
let heading = document.createElement("h3");
heading.innerText = "User 123";

// paragraph
let para = document.createElement("p");
para.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

// structure banana
content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blur);
card.appendChild(content);

// page me add karna
document.body.appendChild(card); */


/* let card = document.createElement("div");
card.className ="card";

let img = document.createElement("img");
img.src ="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687";

img.className ="bg-img";
let blurr = document.createElement("div");
blurr.className ="blurred-layer";

let content = document.createElement("div");
content.className ="content";
let heading = document.createElement("h3");
heading.innerText = "user 123";
let para = document.createElement("p");
para.innerText="wav avubuqwkeubkewbrv wvukwu"; */

// sabse pehle content ke ander heading and paragraph dalo

/* content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blurr);
card.appendChild(content);

document.body.appendChild(card); */
