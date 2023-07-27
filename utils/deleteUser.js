// La función "deleteUser" debe buscar el usuario dentro de la lista,
// eliminarlo, y devolver la nueva lista sin el usuario en cuestión

// import Users from "../users";

function deleteUser(userLastName, holdUsers) {
    const userToDelete = holdUsers.filter((item) => item.last_name !== userLastName);
    
    console.log(userToDelete);
    return userToDelete

}

    

export default deleteUser;
