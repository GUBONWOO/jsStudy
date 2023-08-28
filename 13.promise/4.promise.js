function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('Error'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}
runInDelay(2).then().catch(console.log(error)).finally(console.log(finish));
