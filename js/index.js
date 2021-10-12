const tabSelect = document.querySelector('.tab-m')
const contentArr = [...document.querySelectorAll('.tab-c')]
tabSelect.addEventListener('change', () => {
    contentArr.forEach(i => {
    	if(i.classList.contains(`${tabSelect.value}`)) {
    		contentArr.forEach(i => i.classList.remove('uk-active'))
    		i.classList.add('uk-active')
    	}
    })
})
//questions tabs
const tabQuestions = document.querySelector('.tab-m-q')
const contentArrQuestions = [...document.querySelectorAll('.tab-c-q')]
tabQuestions.addEventListener('change', () => {
    contentArrQuestions.forEach(i => {
    	if(i.classList.contains(`${tabQuestions.value}`)) {
    		contentArrQuestions.forEach(i => i.classList.remove('uk-active'))
    		i.classList.add('uk-active')
    	}
    })
})