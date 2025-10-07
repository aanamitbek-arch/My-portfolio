const greeting = document.createElement("p");
greeting.id = "greeting";
greeting.style.fontSize = "20px";
greeting.style.fontWeight = "bold";
greeting.style.marginTop = "20px";
greeting.style.textAlign = "center";

const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "Доброе утро, Аяна ☀️";
} else if (hour < 18) {
  greeting.textContent = "Добрый день, Аяна 🌤️";
} else {
  greeting.textContent = "Добрый вечер, Аяна 🌙";
}

document.body.prepend(greeting);

const hobbies = document.querySelectorAll("ul li");
hobbies.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.1)";
    item.style.transition = "0.3s";
    item.style.color = "#ff4081";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
    item.style.color = "black";
  });
});

const btn = document.createElement("button");
btn.id = "topBtn";
btn.textContent = "↑ Наверх";
document.body.appendChild(btn);

Object.assign(btn.style, {
  display: "none",
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 15px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  background: "#ff4081",
  color: "white",
  fontSize: "16px",
});

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};