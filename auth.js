// Passwortschutz
const userPassword = prompt("Passwort eingeben:");
if (userPassword !== "baa19wusef") {
  document.body.innerHTML = "<h1>Zugriff verweigert</h1>";
}