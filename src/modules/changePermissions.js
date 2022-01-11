import { render } from "./render"

export const changePermissions = () => { //функция для удаления юзеров
    //получим таблицу и будем отррисовывать каждого юзера в виде строки
    const tbody = document.querySelector('#table-body')

    //повесим обработчик события по клику, используем делигирование
    tbody.addEventListener('click', (e) => {
        if (e.target.closest('input[type=checkbox]')) { //если кликнем, то создадим новую переменную
            const tr = e.target.closest('tr') // строка таблицы
            const input = tr.querySelector('input[type=checkbox]')
            //dataset - команда для того, чтобы достать дата атрибут
            const id = tr.dataset.key //для определения идентификатора пользователя, которого удаляем
            //в userService добавляем новый метод removeUser
            console.log(id)
            console.log(input.checked)
            //создаем новый метод в userService changeUser()

            userService.changeUser(id, {permissions: input.checked}).then(res => { //вызовем и передадим в него id и permissions
                userService.getUsers().then(users => { //вызовем getUsers(), который берет данные с сервера, юрл которого передан в userService и запустим функцию рендер для автоматической отрисовки всех польователей после удаления
                    render(users) //нужно импортировать render в этот модуль вверху модуля
                })
            })
        }
    })
}