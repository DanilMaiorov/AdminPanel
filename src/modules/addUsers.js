import { render } from "./render"
import { warning } from "./helpers"

export const addUsers = () => {
    const form = document.querySelector('form')
    const nameInput = document.querySelector('#form-name')
    const emailInput = document.querySelector('#form-email')
    const childrenInput = document.querySelector('#form-children')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(!form.dataset.method) {
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            }
            userService.sendRequest('http://localhost:8080/users', 'POST', user).then(() => {
                userService.getResponse('http://localhost:8080/users').then(users => {  
                    render(users)
                    form.reset()
                })
                .catch(error => {
                    console.log('Неверно указан URL')
                    warning(error)
                })
            })
            .catch(error => {
                console.log('Неверно указан URL')
                warning(error)
            }) 
        }
    })
}



/* import { render } from "./render"
import { warning } from "./helpers"

export const addUsers = () => { //модуль для получения данных с формы 
    const form = document.querySelector('form') //получим необходимые элементы формы со страницы
    const nameInput = document.querySelector('#form-name')
    const emailInput = document.querySelector('#form-email')
    const childrenInput = document.querySelector('#form-children')

    form.addEventListener('submit', (e) => { //повешаем обработчик события на отправку
        e.preventDefault()
        if(!form.dataset.method) {//если датасета нет, то отправляет посзапрос
            const user = { //создадим карточку нового юзера для добавления в дб джсон
                //id можеи удалить, потому что сервер сам его назначит
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            } //сейчас нужно написать новый метод для добавления пользователя в нашу базу -> переходим в метод userService
             userService.addUser(user).then(() => { //вызовем метод и передадим в него нового юзера
            //в этом моменте в этом месте мы видим ответ мы можем запустить новый метод
                userService.getUsers().then(users => { //вызовем getUsers(), который берет данные с сервера, юрл которого передан в userService и запустим функцию рендер для автоматической отрисовки сохраненного пользователя 
                    render(users) //нужно импортировать render в этот модуль вверху модуля
                    //form.reset() //в случае успешного сохранения, делаем очистку формы
                    form.reset()
                })
            })  
            userService.sendRequest('http://localhost:8080/users', 'POST', user).then(() => {
                userService.getResponse('http://localhost:8080/users').then(users => {  
                    render(users)
                    form.reset()
                })
                .catch(error => {
                    console.log('Неверно указан URL')
                    warning(error)
                })
            })
            .catch(error => {
                console.log('Неверно указан URL')
                warning(error)
            }) 
        }
    })
} */
