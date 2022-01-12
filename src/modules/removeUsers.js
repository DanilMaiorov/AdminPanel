import { warning } from "./helpers"
import { render } from "./render"

export const removeUsers = () => { //функция для удаления юзеров
    //получим таблицу и будем отррисовывать каждого юзера в виде строки
    const tbody = document.querySelector('#table-body')

    //повесим обработчик события по клику, используем делигирование
    tbody.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove')) { //если кликнем, то создадим новую переменную
            const tr = e.target.closest('tr') // строка таблица
            //dataset - команда для того, чтобы достать дата атрибут
            const id = tr.dataset.key //для определения идентификатора пользователя, которого удаляем
            //в userService добавляем новый метод removeUser
            
/*             userService.removeUser(id).then(res => { //вызовем и передадим в него id
                userService.getUsers().then(users => { //вызовем getUsers(), который берет данные с сервера, юрл которого передан в userService и запустим функцию рендер для автоматической отрисовки всех польователей после удаления
                    render(users) //нужно импортировать render в этот модуль вверху модуля
                })
            }) */
            userService.sendRequest(`http://localhost:8080/users/${id}`, 'DELETE').then(res => {
                userService.getResponse('http://localhost:8080/users').then(users => { 
                    render(users)
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
