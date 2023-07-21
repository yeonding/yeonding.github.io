document.addEventListener('DOMContentLoaded', function () {
    const moons = document.querySelectorAll('.moon')
    const mnBtn = document.querySelector('.morning')
    let isMorning = false
    const parts = document.querySelectorAll('part')
    
    const tippyOptions = {
        placement: 'bottom'
        ,theme: 'grey'
        ,allowHTML: true
        ,animation: 'shift-away'
    }


    function showTippy(event, text) {
        tippy(event, {
            content: `<p class="tp ft1">${text}</p>`
            , ...tippyOptions
        })
    }

    mnBtn.onclick = () => {
        const body = document.body
        isMorning = !isMorning
        body.classList.toggle('morning-style', isMorning)
        mnBtn.innerHTML = isMorning ? 'night 🌚' : 'morning 🌞'
    }

    const titles = ['about me', 'skills', 'projects', 'archive', 'contact'];

    moons.forEach((moon, index) => {
        moon.addEventListener('mouseenter', () => {
            if (index <= titles.length) {
                showTippy(moon, titles[index]);
            } 
        }) // mouseenter end

        moon.onclick = () => {
            console.log ('clicked')
        }
    })


})


