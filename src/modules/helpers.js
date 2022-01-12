export const debounce = (func, ms) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {func.apply(this, args)}, ms)
    }
}

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
        table.insertAdjacentElement('beforeend', statusBlock)
        statusBlock.textContent = errorText
    } 
}


/* export const debounce = (func, ms) => { //создаем дебоунс для оптимизации работы с сервером
    //она принимает обертку и задержку в миллисекундах
    //и сразу возвращать стрелочную функцию
    let timer // переменная для сброса таймаута, чтобы не улетало несколько запросов 
    return (...args) => { //функция будет принимать все аргументы
        clearTimeout(timer)
        //привяжем через apply и передадим в неё эту функцию через контекст и все аргументы
        timer = setTimeout(() => {func.apply(this, args)}, ms)
    }
}

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
} */