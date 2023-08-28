function runInDelay(callback, seconds) {
  if (seconds || seconds < 0) {
    throw new Error('need callback');
  }
  setTimeout(callback, seconds * 1000);
}

runInDelay(() => {
  console.log('ok');
}, 2);
