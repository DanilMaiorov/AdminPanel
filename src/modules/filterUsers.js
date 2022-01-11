import { render } from "./render"

export const filterUsers = () => {
    const btnIsChildren = document.querySelector('#btn-isChildren')
    const btnIsPermissions = document.querySelector('#btn-isPermissions')
    const btnIsAll = document.querySelector('#btn-isAll')

    btnIsChildren.addEventListener('click', (e) => { //вешаем обработчик по клику на каждую кнопку
        userService.filterUsers('children').then(users => { //ставим фильтр по детям
            render(users)
        })
    })
    btnIsPermissions.addEventListener('click', (e) => {
        userService.filterUsers('permissions').then(users => { //ставим фильтр по правам
            render(users)
        })
    })
    btnIsAll.addEventListener('click', (e) => {
        userService.getUsers('permissions').then(users => { //тут получаем всех возможных пользователей
            render(users)
        })
    })
}