//1 шаг 
//создание модуля userService из которого мы будем экспортироваться класс

export class UserService {

    _users = [//_для работы через геттеры и сеттеры 
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
    }
        //создадим новый метод, который будет возвращать результат выполнения метода fetch
    getUsers() {
        return fetch('http://localhost:8080/users').then(res => res.json()) //сразу обработаем его и запустим еще раз с выводом в консоль в модуле index

    } 
}