// Smooth scroll
function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Contact form handler
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`✅ Thank you, ${name}! We will contact you soon.`);
    event.target.reset();
  } else {
    alert("❌ Please fill all fields.");
  }
  return false;
}

// Sidebar toggle
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}
