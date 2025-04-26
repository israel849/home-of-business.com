document.getElementById('chatForm').addEventListener('submit', function(event) {
    var userName = document.getElementById('userName').value;
    var userMessage = document.getElementById('userMessage').value;

    if (!userName || !userMessage) {
        alert('Please fill out all fields.');
        event.preventDefault();
    }
});
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  });
});
