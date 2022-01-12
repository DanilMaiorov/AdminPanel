export const debounce = (func, ms) => { //создаем дебоунс для оптимизации работы с сервером
    //она принимает обертку и задержку в миллисекундах
    //и сразу возвращать стрелочную функцию
    let timer // переменная для сброса таймаута, чтобы не улетало несколько запросов 
    return (...args) => { //функция будет принимать все аргументы
        clearTimeout(timer)
        //привяжем через apply и передадим в неё эту функцию через контекст и все аргументы
        timer = setTimeout(() => {func.apply(this, args)}, ms)
    }
}

/* const errorText = 'Произошла ошибка, данных нет!'
const table = document.querySelector('.table-responsive')*/
//const statusBlock = document.createElement('div') 


const table = document.querySelector('.table-responsive')
export const warning = (error) => {

    const statusBlock = document.createElement('div')
    const errorText = 'Произошла ошибка, данных нет!'
    const tbody = document.querySelector('#table-body')
    
    statusBlock.classList.add('status-block')
    statusBlock.style.marginTop = '15px'
    statusBlock.style.border = 'none'
    statusBlock.style.minWidth = '1000px'
    statusBlock.style.maXwidth = '100%'
    statusBlock.style.height = '50px'
    statusBlock.style.color = '#FF6347'
    statusBlock.style.fontSize = '24px'
    statusBlock.style.justifyContent = 'center'
    statusBlock.style.display = 'flex'
    if(error) {
        tbody.innerHTML = '' 
        //table.append(statusBlock)
        table.insertAdjacentElement('beforeend', statusBlock)
        statusBlock.textContent = errorText
    } 


}




/* const statusBlock1 = document.createElement('div')

export const warning = (error) => {
    const errorText = 'Произошла ошибка, данных нет!'
    const table = document.querySelector('.table-responsive')
    const statusBlock = statusBlock1
    const tbody = document.querySelector('#table-body')

    statusBlock.style.marginTop = '15px'
    statusBlock.style.border = 'none'
    statusBlock.style.minWidth = '1000px'
    statusBlock.style.maXwidth = '100%'
    statusBlock.style.height = '50px'
    statusBlock.style.color = '#FF6347'
    statusBlock.style.fontSize = '24px'
    statusBlock.style.justifyContent = 'center'
    
    if(error) {
        tbody.innerHTML = ''
        table.insertAdjacentElement('beforeend', statusBlock)
        //statusBlock.style.display = 'flex'
        statusBlock.textContent = errorText
        table.append(statusBlock)
    } else {
        statusBlock.style.display = 'none'
    }
       // table.append(statusBlock)
}
export const warningNone = () => {

    statusBlock.style.display = 'none'
} */