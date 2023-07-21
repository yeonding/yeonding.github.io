//로컬스토리지를 위해
const onMorningMode = () => {
    document.body.classList.add('morning-style')
    localStorage.setItem('morningMode', 'enable')
}

const onDarkMode = () => {
    document.body.classList.remove('morning-style')
    localStorage.setItem('morningMode', null)
}

document.addEventListener('DOMContentLoaded', function () {
    const moons = document.querySelectorAll('.moon')
    const mnBtn = document.querySelector('.morning')
    let isMorning = false
    let morningMode = localStorage.getItem('morningMode')

    if (morningMode === 'enable') onMorningMode() 
    else onDarkMode()

    const parts = document.querySelectorAll('.part')
    
    const tippyOptions = {
        placement: 'bottom'
        ,theme: 'grey'
        ,allowHTML: true
        ,animation: 'shift-away'
    }

    function showTippy(moon, text) {
        tippy(moon, {
            content: `<p class="tp ft1">${text}</p>`
            , ...tippyOptions
        })
    }

    mnBtn.onclick = () => {
        const body = document.body
        isMorning = !isMorning
        body.classList.toggle('morning-style', isMorning)
        mnBtn.innerHTML = isMorning ? 'night 🌚' : 'morning 🌞'

        if(isMorning){
            localStorage.setItem('morningMode', 'enable')}
        else{
            localStorage.removeItem('morningMode');
        }
    }

    // 카테고리 이름들
    const titles = ['about me', 'skills', 'projects', 'archive', 'contact'];

    moons.forEach((moon, index) => {
        // 달에 마우스를 올리면 tippy 실행
        moon.addEventListener('mouseenter', () => {
            if (index <= titles.length) {
                showTippy(moon, titles[index]);
            } 
        }) // mouseenter end

        // 달을 클릭하면 part div block
        moon.onclick = () => {
            console.log ('clicked')
            parts[index].classList.toggle('show')
        }
    })


})


