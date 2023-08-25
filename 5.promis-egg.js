function fetchEgg(chicken) {
  return new Promise.resolve(`${chicken}=>egg`);
}
fetchEgg('chicken');
