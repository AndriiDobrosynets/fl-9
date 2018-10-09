function* Range(from, to) {
  while (from <= to) {
    yield from++;
  }
}
for (let r of Range(5, 10)) {
  console.log(r);
}