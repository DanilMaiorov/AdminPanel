import { render } from "./render"
import { debounce, warning } from "./helpers"

export const searchUsers = () => {
    const input = document.querySelector('#search-input') //ищем инпут строки поиска

    const debounceSearch = debounce(() => {
            /* userService.getSearchUsers(input.value).then(users => { //передаем значение строки поиска
            render(users) */
        userService.getResponse(`http://localhost:8080/users?name_like=${input.value}`).then(users => { //передаем значение строки поиска
            render(users)
        })
        .catch(error => {
            console.log('Неверно указан URL')
            warning(error)
        }) 
    }, 500)
    input.addEventListener('input', debounceSearch)
}