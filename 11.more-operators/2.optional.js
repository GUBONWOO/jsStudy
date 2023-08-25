let obj = { name: 'asd', owner: { name: 'wwo' } };
function wewe(obj) {
  const ownername = obj?.owner?.name;
  console.log(ownername);
}
wewe(obj);
