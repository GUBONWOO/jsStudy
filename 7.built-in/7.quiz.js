const text = 'Hello World';

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
const ids = 'user1 , 2 , 3 ,4 ';
const array = ids.split(',');
console.log(array);

setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);
