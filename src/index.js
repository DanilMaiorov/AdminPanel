import { render } from './modules/render'; //импортируем через {} потому что экспортировали не по дефолту
import { addUsers } from './modules/addUsers';//импортируем через {} потому что экспортировали не по дефолту
import { UserService } from './modules/userService'; //импортируем через {} потому что экспортировали не по дефолту
import { removeUsers } from './modules/removeUsers'; //импортируем через {} потому что экспортировали не по дефолту
import { changePermissions } from './modules/changePermissions'; //импортируем через {} потому что экспортировали не по дефолту
import { editUsers } from './modules/editUsers'; //импортируем через {} потому что экспортировали не по дефолту
import { filterUsers } from './modules/filterUsers'; //импортируем через {} потому что экспортировали не по дефолту

//после импорта UserService создадим новый экземпляр класса
//const userService = new UserService // и его теперь будем передавать в любой модуль и исплльзовать //НО ЭТОТ МЕТОД НЕ САМЫЙ ЛУЧШИЙ, МОЖЕМ ЕГО УДАЛИТЬ И СДЕЛАТЬ (В КОДЕ НИЖЕ)

window.userService = new UserService // в таком случае нам не обязательно передавать userService в переменныее, потому что это стал глобальный объект

userService.getUsers().then(data => { //вызовем метод getUsers(), который берет данные с сервера, юрл которого передан в userService и обработаем еще раз чтобы с данными можно было работать
    render(data);//передадим дату и в этом случае мы связали данные с сервера напрямую, поэтому геттер, сеттер и статический юзерс в модуле userService нам не нужен

})
//render(userService.users);//передадим userService.users //ЭТО УЖЕ НЕ НУЖНО, ПОТОМУ КАК ПЕРЕДАДИМ ВЫЗОВ МЕТОДА RENDER() В ВЫЗОВ ФУНКЦИИ GETDATA, В КОТОРОЙ СРАЗУ ПРОИЗВОДИМ ОБРАБОТКУ ПОЛУЧЕННЫХ ДАННЫХ

addUsers()
removeUsers()
changePermissions()
editUsers()
filterUsers()