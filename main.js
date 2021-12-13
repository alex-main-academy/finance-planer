const categories = document.querySelector('.categories')
const addCategories = document.querySelector('.add__categories')
const modalWindow = document.querySelector('.modal__window')

const modalIconArr = document.querySelectorAll('.modal__icon')
modalIconArr.forEach((elem) => {
    elem.addEventListener('click', () => {
        modalIconArr.forEach((item) => {
            item.classList.remove('active')
        })
        elem.classList.add('active')
    })
})

function createCategItem(text, src, color) {
    let categoriesItem = document.createElement('div')
    let categoriesText = document.createElement('p')
    let categoriesIcon = document.createElement('div')
    let imgIcon = document.createElement('img')
    let categoriesSum = document.createElement('p')

    categoriesItem.classList.add('categories__item')
    categoriesText.classList.add('categories__text')
    categoriesIcon.classList.add('categories__icon')
    categoriesSum.classList.add('categories__sum')

    categoriesText.innerHTML = text;
    categoriesSum.innerHTML = 0 + ' ₴';
    categoriesIcon.style.background = color;

    imgIcon.src = src;
    imgIcon.style.width = '32px'
    categoriesIcon.append(imgIcon)
    categoriesItem.append(categoriesText, categoriesIcon, categoriesSum)
    categories.prepend(categoriesItem)
}
//creating common categories
createCategItem('Продукты', './icon/cart-70-64.png', 'gray')
createCategItem('Комуналка', './icon/home-5-64.png', 'gray')
createCategItem('Одежда', './icon/shirt-64.png', 'gray')
createCategItem('Транспорт', './icon/train-64.png', 'gray')
createCategItem('Кафе', './icon/coffee-7-64.png', 'gray')

addCategories.addEventListener('click', () => {
    const close = document.querySelector('.close__modal')
    const addModal = document.querySelector('.add__modal')
    
    modalWindow.style = `
        transform: translate(0);
    `

    close.addEventListener('click', () => {
        modalWindow.style = `
            transform: translate(-100%)
        `
    })


    addModal.addEventListener('click', () => {
        let inputName = document.querySelector('.input__name')

        if (inputName.value != '') {
            let img = document.querySelector('.active')
            let inputColor = document.querySelector('.modal__color')

            createCategItem(inputName.value, img.src, inputColor.value)

            inputName.value = ''
            modalIconArr.forEach((elem) => {
                elem.classList.remove('active')
            })
        }
        
        
        modalWindow.style = `
            transform: translate(-100%)
        `
    })
})


//creating calculators
const calcInputValue = document.querySelector('.calc__input-value')
const calcNumberArr = document.querySelectorAll('.calc__number')
const backSpace = document.querySelector('.backspace')
const categoriesItem = document.querySelectorAll('.categories__item')
const modalCalc = document.querySelector('.modal__calc')
const calcAdd = document.querySelector('.calc__add')
let elemArr = ['0']
calcInputValue.innerHTML = elemArr.join('')

calcNumberArr.forEach((elem) => {
    elem.addEventListener('click', () => {
        
        if (elemArr[0] == '0') {
            elemArr.pop()
        }

        elemArr.push(elem.innerText)
        console.log(elemArr)
        calcInputValue.innerHTML = elemArr.join('')

        if (elemArr[0] == '0' && elemArr[1] == '0') {
            elemArr.pop()
            calcInputValue.innerHTML = elemArr.join('')
        }
    })
})

backSpace.addEventListener('click', () => {
    elemArr.pop()
    calcInputValue.innerHTML = elemArr.join('')

    if (elemArr.length == 0) {
        elemArr.push('0')
        calcInputValue.innerHTML = elemArr.join('')
    }
})


categoriesItem.forEach((elem) => {
    elem.addEventListener('click', () => {
        modalCalc.style = `
        transform: translate(0)
    `
    })
})
calcAdd.addEventListener('click', () => {
    modalCalc.style = `
        transform: translate(-100%)
    `
})