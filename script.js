const validChars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
const length = 18;
let password = '';

for (let i = 0; i < length; i++) {
  let index = Math.floor(Math.random() * validChars.length);
  password += validChars[index];
}
console.log(password);