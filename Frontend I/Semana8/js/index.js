const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

let users = ["Juan", "Camilo", "Nikol", "Mariana", "Andres"];

for (let i = 0; i < users.length; i++) {
	const element = `Nombre ` + users[i];
	console.log(element);
}

users.unshift("Jose");
console.log(users);
users.push("Alejandro");
console.log(users);

users.pop();
console.log(users);

console.log(users.indexOf("Adrian"));
