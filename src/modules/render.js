export const render = (users) => { //вызвали функцию в index, передали в неё класс и теперь обращаемся к классу(а класс это объект) и к его свойствам
//ПОСКОЛЬКУ ВЫЗВАЛИ userService глобально и удалили в передаче в качестве аргумента при вызове функции, то можем удалить и здесь и обращаться через глобальный объект
//window.userService.users = [{ //проверяем работу геттера и сеттера, передаем пустой id
    //    id: 0
    //}]
    //userService.logger() //запускаем метод для вывода в консоль и так как обращаемся к глобальному объекту, то window писать не обязательно
//ПЕРЕДАДИМ В ФУНКЦИЮ МАССИВ users

        //теперь необходимо отрисовывоть каждого юзера в таблице
        //получим таблицу и будем отррисовывать каждого юзера в виде строки
    const tbody = document.querySelector('#table-body')
    tbody.innerHTML = '' //чтобы не дублировался список с вновь добавленным юзером
    users.forEach(user => {
        //при каждой итерации будем вписывать новую строчку в верстку
        tbody.insertAdjacentHTML('beforeend', `
        <tr data-key="${user.id}">
            <th scope="row">${user.id}</th> 
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.children ? 'Есть' : 'Нет'}</td>
            <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch"
                        id="form-children" ${user.permissions ? 'checked' : ''}> 
                </div>
            </td>
            <td>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-warning btn-edit">
                        <i class="bi-pencil-square"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-remove">
                        <i class="bi-person-x"></i>
                    </button>
                </div>
            </td>
        </tr>
        `) //делаем их динамичными через внедрение ${}
        //а в верстке теги tr комментируем, потому что внедряем через JS
        //В ФАЙЛЕ DB.JSON ПЕРЕИМЕНОВЫВАЕМ ОБЪЕКТ В USERS
})
}
