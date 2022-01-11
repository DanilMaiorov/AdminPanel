//1 шаг 
//создание модуля userService из которого мы будем экспортироваться класс

export class UserService {
/*     _users = [//_для работы через геттеры и сеттеры 
        //ВРЕМЕННО СОЗДАДИМ ОБЪЕКТЫ
        {
            id: 0,
            name: 'Mark',
            email: 'mark@mark.mark',
            children: true,
            permissions: false,
        },
        {
            id: 1,
            name: 'Otto',
            email: 'otto@otto.otto',
            children: false,
            permissions: true,
        },
    ] 
    get users() { //геттер 
        return this._users //возвращает юзеров, которых хотим получить через контекст вызова
    }
    set users(users) {//сеттер
        this._users = users//который принимает массив users и переопределяет его через контекст вызова
    }
    logger() {
        console.log(this.users) //тестотый модуль для вывода информации через контекст вызова
    } */ //КОММЕНТИРУЕМ ПОТОМУ ЧТО ИСПОЛЬЗУЕМ ДАННЫЕ НАПРЯМУЮ

        //создадим новый метод, который будет возвращать результат выполнения метода fetch
    getUsers() { //по умолчанию использует метод 'GET' - для того, чтобы получать что-то с БД
        return fetch('http://localhost:8080/users').then(res => res.json()) //сразу обработаем его и запустим еще раз с выводом в консоль в модуле index
    } 
    addUser(user) { //метод для добавления нового юзера на сервер
        return fetch('http://localhost:8080/users', {
            method: 'POST', //'POST' - для того, чтобы сохранять новые данные в БД            
            body: JSON.stringify(user), //тело запроса, в него передаем то, что передали в метод addUser() в виде строки
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()) //необходимо, после отправки запроса обрабатывать полученные данные, что бы получать правильный ответ
    }
    removeUser(id) { //передаем в него id строки //'DELETE'
        return fetch (`http://localhost:8080/users/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()) //пишем через обратные кавычки и для запроса 'DELETE' нужно добавить /id и добавим раскрытие данных и вызовем этот метод в модуле removeUsers
    }
    changeUser(id, data) { //передаем в него id строки и некоторые данные//'PATCH'
        return fetch (`http://localhost:8080/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),//передаем data потому что нужно передать только часть данных, а не всё
            headers: {
                "Content-Type": "application/json"
            } 
        }).then(res => res.json()) //пишем через обратные кавычки и для запроса 'DELETE' нужно добавить /id и добавим раскрытие данных и вызовем этот метод
    }
    getUser(id) {//получение информации по конкретному пользователю,передаем в него id
        return fetch (`http://localhost:8080/users/${id}`).then(res => res.json()) //'GET'
    } 

    editUser(id, user) {
        //передаем в него id строки и .pthf//'PUT'
        return fetch (`http://localhost:8080/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),//передаем user 
            headers: {
                "Content-Type": "application/json"
            } 
        }).then(res => res.json()) //пишем через обратные кавычки и для запроса 'DELETE' нужно добавить /id и добавим раскрытие данных и вызовем этот м
    }
}