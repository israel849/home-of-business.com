// db.js
function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

function findUser(email, password) {
  const users = getUsers();
  return users.find(u => u.email === email && u.password === password);
}

function userExists(email) {
  const users = getUsers();
  return users.some(u => u.email === email);
}
