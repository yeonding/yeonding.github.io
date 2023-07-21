document.addEventListener('DOMContentLoaded', function () {

    document.querySelector(".morning").onclick = () => {
        const body = document.body
        if (body.classList.contains("morning-style")) {
            body.classList.remove("morning-style");
            document.querySelector(".morning").innerHTML=`morning🌞`
        } else {
            body.classList.add("morning-style");
            document.querySelector(".morning").innerHTML=`night🌚`
        }
    }
})
