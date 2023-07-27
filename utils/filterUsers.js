// La función "filterUserByAge" extraerá de la lista los usuarios 
// que cumplan con las condiciones de edad, y devolverá una nueva lista
// con los usuarios filtrados
// Los parámetros de edad son:
//     - "all": devolver todos los usuarios
//     - "young": usuarios de menos de 29 años (incluido 29)
//     - "adult": usuarios de entre 30 y 64 años (ambos incluidos)
//     - "young": usuarios de más de 65 años (incluido 65)

function filterUsersByAge(filterAge,holdUsers) {
    if (filterAge === "all") {

        console.log(holdUsers);
        return holdUsers

    }else if(filterAge === "young"){
        // return holdUsers.filter(user => user.age <= 29);
    const filterUsers = holdUsers.filter(user => user.age <= 29)  
    console.log(filterUsers);
    return filterUsers  

    }else if(filterAge === 'adult'){
        const userAdult = holdUsers.filter(user => user.age >= 30 && user.age <= 64)
        console.log(userAdult);
        return userAdult

    }else if(filterAge === 'elderly'){
        const userElderly = holdUsers.filter(user => user.age >= 65);
        console.log(userElderly);
        return userElderly;

    }else{
        return [];
    }

}

// La función "filterUserByCountry" extraerá de la lista los usuarios 
// que cumplan con la condición de país, y devolverá una nueva lista
// con los usuarios filtrados

function filterUsersByCountry(filterCountry,holdUsers) {
const filteredUsers = holdUsers.filter(user => user.country === filterCountry);
console.log(filteredUsers);
    
}

export {filterUsersByAge, filterUsersByCountry}

