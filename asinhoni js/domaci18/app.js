// Domaci:
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.
function provera(obj) {
  const promise = new Promise((resolve, reject) => {
    if (obj.age >= 18) resolve("Punoletni ste");
    else reject(`Niste punoletni i imate ${obj.age} godine`);
  });
  promise
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`${error}`);
    });
  return `Godine su proverene`;
}
const obj1 = {
  name: "Merisa",
  prezime: "Besirovic",
  age: 12,
};
const obj2 = { name: "Merisa", prezime: "Besirovic", age: 20 };
console.log(provera(obj1));
console.log(provera(obj2));
