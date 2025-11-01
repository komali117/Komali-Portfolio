const greet = document.getElementById("greetingText");
const hr = new Date().getHours();
if (hr < 12) greet.textContent = "Good Morning 🌅";
else if (hr < 18) greet.textContent = "Good Afternoon ☀️";
else greet.textContent = "Good Evening 🌙";


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !msg) {
    alert("Please fill in all fields!");
    return;
  }
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }
  alert("Message sent successfully!");
  this.reset();
});

const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
