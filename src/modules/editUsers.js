import { render } from "./render"
import { warning } from "./helpers"

export const editUsers = () => {
    const tbody = document.querySelector('#table-body')
    const form = document.querySelector('form')
    const nameInput = document.querySelector('#form-name')
    const emailInput = document.querySelector('#form-email')
    const childrenInput = document.querySelector('#form-children')
    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.btn-edit')) {
            const tr = e.target.closest('tr')
            const id = tr.dataset.key
            userService.getResponse(`http://localhost:8080/users/${id}`).then(user => {
                nameInput.value = user.name
                emailInput.value = user.email
                childrenInput.checked = user.children
                form.dataset.method = id
            })
        }
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(form.dataset.method) {
            const id = form.dataset.method
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            }
            userService.sendRequest(`http://localhost:8080/users/${id}`, 'PUT', user).then(() => { 
                userService.getResponse('http://localhost:8080/users').then(users => { 
                    render(users)
                    form.reset()
                    form.removeAttribute('data-method')
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

export const editUsers = () => { //функция для удаления юзеров
    //получим таблицу и будем отррисовывать каждого юзера в виде строки
    const tbody = document.querySelector('#table-body')
    //для дальнейшего редактированияполучим необходимые элементы формы со страницы
    const form = document.querySelector('form')
    const nameInput = document.querySelector('#form-name')
    const emailInput = document.querySelector('#form-email')
    const childrenInput = document.querySelector('#form-children')

    //повесим обработчик события по клику, используем делигирование
    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.btn-edit')) { //если кликнем, то создадим новую переменную
            const tr = e.target.closest('tr') // строка таблица
            //dataset - команда для того, чтобы достать дата атрибут
            const id = tr.dataset.key //для определения идентификатора пользователя, которого удаляем
            //в userService добавляем новый метод editUser
/*             userService.getUser(id).then(user => { //вызовем и передадим в него id 
                nameInput.value = user.name // благодаря этому действию мы получаем данные пользователя в форме для того, чтобы их редактиврова
                emailInput.value = user.email
                childrenInput.checked = user.children // если оставить как есть, то при нажатии на кнопкеу сохранить, уйдёт просто пост запрос
                //обратимся к форме
                form.dataset.method = id
            }) 
            userService.getResponse(`http://localhost:8080/users/${id}`).then(user => {
                nameInput.value = user.name
                emailInput.value = user.email
                childrenInput.checked = user.children
                form.dataset.method = id
            })
        }
    })
    form.addEventListener('submit', (e) => { //повешаем еще один обработчик события на отправку
        e.preventDefault()
        if(form.dataset.method) {//если датасет есть, то отправляет посзапрос
            const id = form.dataset.method
            const user = { //создадим карточку нового юзера для добавления в дб джсон
                //id можем удалить, потому что сервер сам его назначит
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            } //сейчас нужно написать новый метод для добавления пользователя в нашу базу -> переходим в метод userService
              /*userService.editUser(id, user).then(() => { //вызовем метод и передадим в него измененного юзера
            //в этом моменте в этом месте мы видим ответ мы можем запустить новый метод
                userService.getUsers().then(users => { //вызовем getUsers(), который берет данные с сервера, юрл которого передан в userService и запустим функцию рендер для автоматической отрисовки сохраненного пользователя 
                    render(users) //нужно импортировать render в этот модуль вверху модуля
                    form.reset()
                    form.removeAttribute('data-method')
                })
            })   
            userService.sendRequest(`http://localhost:8080/users/${id}`, 'PUT', user).then(() => { 
                userService.getResponse('http://localhost:8080/users').then(users => { 
                    render(users)
                    form.reset()
                    form.removeAttribute('data-method')
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
