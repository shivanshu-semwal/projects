const data = [
  {
    project: "Hand Gesture Recognition",
    stack: ["ML", "CNN", "streamlit"],
    description: "A hand gesture recognition model built using tensorflow cnn",
    website: "#",
    github: "https://github.com/shivanshu-semwal/hand-gesture-recognition",
    image: "src/img/hand.jpg",
    status: "Model done.",
  },
  {
    project: "Recipe Recommender",
    stack: ["neo4j", "node", "express"],
    description: "Recommend recipes for ingredients built using neo4j",
    website: "#",
    github: "https://github.com/shivanshu-semwal/recipe-recommender",
    image: "src/img/recipe-recommender.png",
    status: "Not deployed.",
  },
  {
    project: "Digital Garden Blog",
    stack: ["liquid", "jekyll"],
    description: "My blog built using jekyll.",
    website: "https://shivanshu-semwal.github.io/blog/",
    github: "https://github.com/shivanshu-semwal/blog",
    image: "src/img/blog.png",
    needs: "People with super powers",
    status: "Live",
  },
  {
    project: "totoro-dotfiles",
    stack: ["linux", "dotfiles", "ux-ui"],
    description: "Configuration files for my lubuntu distro.",
    website: "#",
    github: "https://www.github.com",
    needs: "People with super powers, semi-super powers, or no powers at all",
    image: "src/img/dotfiles.png",
    status: "Live",
  },
  {
    project: "alacritty-conf",
    stack: ["bash", "yaml", "linux"],
    description:
      "A bash script to change to configuration of alacritty terminal. GUI made with rofi",
    website: "#",
    github: "https://github.com/totoro-ghost/alacritty-conf",
    image: "src/img/alacritty.png",
    needs: "People with super powers",
    status: "Live",
  },
];

function insertProject(project) {
  var container = document.getElementById("container");

  var card = document.createElement("div");
  card.setAttribute("class", "flip-card");

  var div = document.createElement("div");
  div.setAttribute("class", "flip-card-inner");

  // front
  var content = document.createElement("div");
  content.setAttribute("class", "flip-card-front");

  // image
  var img = document.createElement("img");
  img.setAttribute("src", project["image"]);
  img.setAttribute("class", "card-image");
  content.appendChild(img);

  var tool = document.createElement("div");
  tool.setAttribute("class", "icon");
  for (let i = 0; i < project["stack"].length; i++) {
    var tool_child = document.createElement("span");
    tool_child.setAttribute("class", project["stack"][i]);
    tool.appendChild(tool_child);
  }
  content.appendChild(tool);

  var title = document.createElement("p");
  title.setAttribute("class", "card-title");
  title.innerText = project["project"];
  content.appendChild(title);

  var link = document.createElement("div");
  link.setAttribute("class", "links");
  var github = document.createElement("div");
  github.setAttribute("class", "github");
  github.innerHTML = "<a href=" + project["github"] + ">Github</a>";
  var website = document.createElement("div");
  website.setAttribute("class", "website");
  website.innerHTML = "<a href=" + project["website"] + ">Website</a>";
  var more = document.createElement("div");
  more.setAttribute("class", "more");
  more.innerHTML = "More...";
  if (project["website"] !== "#") link.appendChild(website);
  link.appendChild(github);
  link.appendChild(more);
  content.appendChild(link);

  div.appendChild(content);

  // back
  var reveal = document.createElement("div");
  reveal.setAttribute("class", "flip-card-back");

  var top = document.createElement("div");
  top.setAttribute("class", "top");
  var title = document.createElement("p");
  title.setAttribute("class", "card-title-back");
  title.innerText = project["project"];
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "close");
  svg.setAttribute("height", "2em");
  svg.setAttribute("viewBox", "0 0 320 512");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
  );
  svg.appendChild(path);

  // svg.setAttribute("src", "src/img/xmark-solid.svg")
  top.appendChild(title);
  top.appendChild(svg);
  reveal.appendChild(top);

  var progress_text = document.createElement("p");
  progress_text.setAttribute("class", "status");
  progress_text.innerText = project["status"];
  reveal.appendChild(progress_text);

  var description = document.createElement("p");
  description.setAttribute("class", "description");
  description.innerText = project["description"];
  reveal.appendChild(description);

  div.appendChild(reveal);
  card.appendChild(div);

  container.appendChild(card);
}

function flip() {
  let ele = this.parentElement.parentElement.parentElement;
  ele.style.transform = "rotateY(180deg)";
}

function flip2() {
  let ele = this.parentElement.parentElement.parentElement;
  ele.style.transform = "";
}

window.onload = function () {
  for (let i = 0; i < data.length; i++) {
    insertProject(data[i]);
  }
  var t = document.getElementsByClassName("more");
  for (let i = 0; i < t.length; i++) {
    t[i].addEventListener("click", flip);
  }

  var close_buttons = document.getElementsByClassName("close");
  for (let i = 0; i < t.length; i++) {
    close_buttons[i].addEventListener("click", flip2);
  }
};
