const year = new Date().getFullYear();

const yearElement = document.querySelectorAll(".year-element");
yearElement.forEach((element) => {
  element.textContent = year;
});

const heroName = document.querySelector(".hero-name");
const heroTagline = document.querySelector(".hero-tagline");
const heroName_text = "Aditya Sharma";
const heroTagline_text = `Passionate Computer Science student building impactful web applications and solving real-world problems.`;
heroName.textContent = "";
heroTagline.textContent = "";
nameWriter(heroName, heroName_text, 100);
nameWriter(heroTagline, heroTagline_text, 15);
function nameWriter(element, text, timeout, idx = 0) {
  if (idx < text.length) {
    element.textContent += text[idx];
    setTimeout(() => {
      nameWriter(element, text, timeout, idx + 1);
    }, timeout);
  }
}

emailjs.init({
  publicKey: "tQFKaIumFKC_c17Gc",
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_ei4cft7", "template_u6n477n", form)
    .then(() => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });
});
