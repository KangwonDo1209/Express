var members = ["egoing", "k8805", "hoya"];
console.log(members[1]);

var roles = {
    programmer: "egoing",
    designer: "k8805",
    manager: "hoya",
};
console.log(roles.manager);

for (var name in roles) {
    console.log("object => ", name, "/ value => ", roles[name]);
}
