gsap.from(".intro-title", { opacity: 0, duration: 4, y: -50 });
gsap.from(".phone-style", { opacity: 0, duration: 4, x: 50 });

const text = document.querySelector("#animation");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

function scrollAppearing() {
  let chatbotText = document.querySelector(".chatbot-description");
  let chatbotTextPos = chatbotText.getBoundingClientRect().top;
  //console.log(chatbotTextPos);
  let screenPosition = window.innerHeight;

  if (chatbotTextPos < screenPosition) {
    chatbotText.classList.add("chatbot-appear");
  }
}

window.addEventListener("scroll", scrollAppearing());
