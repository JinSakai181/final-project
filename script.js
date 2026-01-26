const footerLinks = document.querySelectorAll("footer ul li");

footerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function showTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("clock").innerText =
    hours + ":" + minutes + ":" + seconds + " " + ampm;
}

showTime();
setInterval(showTime, 1000);

function callAlert() {
  alert("რეკავთ ნომერზე: (+62) 123 456 789");
}

const texts = [
  "დღეს ახალი დასაწყისია გამოიყენე იგი ბოლომდე",
  "„ყველაფერი იწყება მცირე ნაბიჯებით, უბრალოდ დაიწყე",
  "თითოეული დღე ახალი შანსია უკეთესი გახდე",
  "თითოეული პატარა წარმატება დიდი გზის ნაწილია",
  "როცა გჯერა საკუთარ შესაძლებლობებში, ყველაფერი შესაძლებელია",
];

function changeTextSmooth() {
  const p = document.getElementById("heroText");

  p.style.opacity = 0;

  setTimeout(() => {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    p.innerText = randomText;
    p.style.opacity = 1;
  }, 500);
}

const cities = [
  "Paris",
  "Berlin",
  "Rome",
  "Madrid",
  "Lisbon",
  "New York",
  "Toronto",
  "Los Angeles",
  "Chicago",
  "Mexico City",
];

const buttons = document.querySelectorAll(".background button");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closeBtn = document.getElementById("closePopup");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    popupText.textContent = randomCity;
    popup.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
const navLinks = document.querySelectorAll(".nav_links li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
document.getElementById("submitBtn").addEventListener("click", function () {
  var allValid = true;

  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");
  var service = document.getElementById("service");

  var errorName = document.querySelector(".error-name");
  var errorAddress = document.querySelector(".error-address");
  var errorPhone = document.querySelector(".error-phone");
  var errorService = document.querySelector(".error-service");

  if (name.value.trim() === "") {
    name.classList.add("error");
    errorName.textContent = "გთხოვთ შეავსოთ ეს ველი";
    allValid = false;
  } else if (name.value.trim().length < 8) {
    name.classList.add("error");
    errorName.textContent = "სახელი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს";
    allValid = false;
  } else {
    name.classList.remove("error");
    errorName.textContent = "";
  }

  if (address.value.trim() === "") {
    address.classList.add("error");
    errorAddress.textContent = "გთხოვთ შეავსოთ ეს ველი";
    allValid = false;
  } else {
    address.classList.remove("error");
    errorAddress.textContent = "";
  }

  if (!/^\+?\d{7,15}$/.test(phone.value.trim())) {
    phone.classList.add("error");
    errorPhone.textContent = "გთხოვთ შეიყვანოთ ვალიდური ტელეფონი";
    allValid = false;
  } else {
    phone.classList.remove("error");
    errorPhone.textContent = "";
  }

  if (service.value === "") {
    service.classList.add("error");
    errorService.textContent = "გთხოვთ აირჩიოთ სერვისი";
    allValid = false;
  } else {
    service.classList.remove("error");
    errorService.textContent = "";
  }

  var successMsg = document.getElementById("success-message");
  if (allValid) {
    successMsg.style.display = "block";
  } else {
    successMsg.style.display = "none";
  }
});
const address = document.getElementById("address");

address.addEventListener("input", () => {
  address.value = address.value.replace(/[A-Za-z]/g, "");
});
document.getElementById("subscribeBtn").addEventListener("click", function () {
  var emailInput = document.getElementById("subscribeEmail");
  var email = emailInput.value.trim();

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("გთხოვთ შეავსოთ ელ.ფოსტის ველი");
  } else if (!emailPattern.test(email)) {
    alert("გთხოვთ შეიყვანოთ ვალიდური ელ.ფოსტა");
  } else {
    alert("წარმატებით გამოწერა!");
    emailInput.value = "";
  }
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstName === "") {
    alert("გთხოვთ შეავსოთ სახელი");
    return;
  }
  if (lastName === "") {
    alert("გთხოვთ შეავსოთ გვარი");
    return;
  }
  if (email === "") {
    alert("გთხოვთ შეავსოთ ელ.ფოსტა");
    return;
  }
  if (!emailPattern.test(email)) {
    alert("გთხოვთ შეიყვანოთ ვალიდური ელ.ფოსტა");
    return;
  }
  if (subject === "") {
    alert("გთხოვთ შეავსოთ თემის ველი");
    return;
  }
  if (message === "") {
    alert("გთხოვთ შეავსოთ შეტყობინება");
    return;
  }

  alert("წარმატებით გაიგზავნა თქვენი შეტყობინება!");
});

const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
