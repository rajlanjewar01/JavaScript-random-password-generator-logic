const chars = "abcdefghijklm1234567890!@#$%^&*()";
const length = 12;
let generatedPass = '';

for(let i = 0; i <= length; i++){
  let index = Math.floor(Math.random() * chars.length);
  generatedPass += chars[index];
}

console.log(generatedPass);