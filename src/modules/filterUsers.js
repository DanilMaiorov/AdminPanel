import { render } from "./render"
import { warning } from "./helpers"

export const filterUsers = () => {
    const btnIsChildren = document.querySelector('#btn-isChildren')
    const btnIsPermissions = document.querySelector('#btn-isPermissions')
    const btnIsAll = document.querySelector('#btn-isAll')
    btnIsChildren.addEventListener('click', (e) => {
        userService.getResponse(`http://localhost:8080/users?children=true`).then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан HTTP')
            warning(error)
        })
    })
    btnIsPermissions.addEventListener('click', (e) => {
        userService.getResponse(`http://localhost:8080/users?permissions=true`).then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан URL')
            warning(error)
        })
    })
    btnIsAll.addEventListener('click', (e) => {
        userService.getResponse('http://localhost:8080/users').then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан URL')
            warning(error)
        })
    })
}


/* import { render } from "./render"
import { warning } from "./helpers"

export const filterUsers = () => {
    const btnIsChildren = document.querySelector('#btn-isChildren')
    const btnIsPermissions = document.querySelector('#btn-isPermissions')
    const btnIsAll = document.querySelector('#btn-isAll')

    btnIsChildren.addEventListener('click', (e) => { //вешаем обработчик по клику на каждую кнопку
        /* userService.filterUsers('children').then(users => { //ставим фильтр по детям
            render(users) 
        userService.getResponse(`http://localhost:8080/users?children=true`).then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан HTTP')
            warning(error)
        })
    })
    btnIsPermissions.addEventListener('click', (e) => {
        /* userService.filterUsers('permissions').then(users => { //ставим фильтр по правам
            render(users) 
        userService.getResponse(`http://localhost:8080/users?permissions=true`).then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан URL')
            warning(error)
        })
    })
    btnIsAll.addEventListener('click', (e) => {
        /* userService.getUsers().then(users => { //тут получаем всех возможных пользователей
            render(users) 
        userService.getResponse('http://localhost:8080/users').then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан URL')
            warning(error)
        })
    })
} */

