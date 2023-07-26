// La función "createUser" recibirá la información del nuevo usuario,
// creará un objeto siguiendo el modelo de los usuarios del
// archivo "users.js", lo añadirá AL PRINCIPIO de la lista de usuarios
// y devolverá la nueva lista




export default createUser;
function createUser(name,lastname,age,country,holdUsers) {
     let newId = holdUsers.length + 1
    let newUser = {
        first_name: name,
        last_name: lastname,
        age: age,
        country: country,
        id: newId,
    }

    console.log(newUser);

    holdUsers.unshift(newUser)
    console.log(holdUsers);
    return holdUsers;
}














