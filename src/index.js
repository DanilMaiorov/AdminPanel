import { render } from './modules/render'; //импортируем через {} потому что экспортировали не по дефолту
import { UserService } from './modules/userService'; //импортируем через {} потому что экспортировали не по дефолту

//после импорта UserService создадим новый экземпляр класса
//const userService = new UserService // и его теперь будем передавать в любой модуль и исплльзовать //НО ЭТОТ МЕТОД НЕ САМЫЙ ЛУЧШИЙ, МОЖЕМ ЕГО УДАЛИТЬ И СДЕЛАТЬ (В КОДЕ НИЖЕ)

window.userService = new UserService // в таком случае нам не обязательно передавать userService в переменныее, потому что это стал глобальный объект


render(userService.users);//передадим userService.users
