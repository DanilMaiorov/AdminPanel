import { render } from "./render"
import { debounce } from "./helpers"

export const searchUsers = () => {
    const input = document.querySelector('#search-input') //ищем инпут строки поиска

    const debounceSearch = debounce(() => {
            /* userService.getSearchUsers(input.value).then(users => { //передаем значение строки поиска
            render(users) */
        userService.getResponse(`http://localhost:8080/users?name_like=${input.value}`).then(users => { //передаем значение строки поиска
            render(users)
        })
    }, 500)
    

    input.addEventListener('input', debounceSearch)
}