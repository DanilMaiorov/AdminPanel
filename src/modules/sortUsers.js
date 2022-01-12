import { render } from "./render"
import { warning } from "./helpers"

export const sortUsers = () => {
    const headerSortIsChildren = document.querySelector('#sort-is-children')
    headerSortIsChildren.style.cursor = 'pointer'
    let isSort = false
    headerSortIsChildren.addEventListener('click', () => {
        userService.getResponse(`http://localhost:8080/users?_sort=children&_order=${isSort ? 'asc' : 'desc'}`).then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан URL')
            warning(error)
        })
        isSort = !isSort
        })

    
}
/* import { render } from "./render"
import { warning } from "./helpers"

export const sortUsers = () => { //модуль для сортировки пользователей 
    const headerSortIsChildren = document.querySelector('#sort-is-children') //определим элемент, по клику на который будет производиться сортировка
    headerSortIsChildren.style.cursor = 'pointer' //сделаем курсор при наведении
    //вводим изменяемую переменную для переключению с режима "на увеличение" на режим "на уменьшение"
    let isSort = false
    //getSortUsers
    headerSortIsChildren.addEventListener('click', () => {
/*         userService.getSortUsers({ //передаем целый объект
            name: 'children',
            value: isSort ? 'asc' : 'desc', //если тру, то отрисовываем так, если фолс то иначе
        }).then(users => {
            render(users) //отрисовываем 
        }) 
        userService.getResponse(`http://localhost:8080/users?_sort=children&_order=${isSort ? 'asc' : 'desc'}`).then(users => {
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан URL')
            warning(error)
        })
        isSort = !isSort //при клике будет происходить изменение значения перемененной
        })

    
} */