function readFile(path) {
  throw new Error('can not find');
  return 'work';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
  }

  const result = 'hi' + content;
  return result;
}
const result = processFile('rudfh');
console.log(result);
