import { User } from "../models/User.model.js";

let listUser = [];

function createUser(name, email, password){
    const newUser = new User(name, email, password);
    listUser.push(newUser);
    return newUser;
}

function getAllUser(){
    return listUser;
}

function getUserById(id){
    let user = listUser.find(data => data.id === id);
    if(user){
        return user;
    }else{
        return "ID não encontrado!"
    }
}

function updatePassword(id, email, newPassword){
    let user = listUser.find(data => data.id === id && data.email === email);
    if(user){
        let userIndex = listUser.findIndex(data => data.id === id);
        listUser[userIndex].password = newPassword;
        return listUser[userIndex];
    }else{
        return "ID e/ou e-mail incorretos!"
    }
}

function deleteUser(id, email, password){
    let user = listUser.find(data => data.id === id && data.email === email && data.password === password);
    if(user){
        let userIndex = listUser.findIndex(data => data.id === id);
        listUser.splice(userIndex, 1);
        return "Usuário deletado com sucesso!"
    }else{
        return "Dados incorretos!"
    }
}

export { createUser, getAllUser, getUserById, updatePassword, deleteUser }