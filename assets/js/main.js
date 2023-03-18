const mario = document.querySelector(".mario-gif")
const pipe = document.querySelector(".pipe-img")
const cloud = document.querySelector(".cloud")
const jumpMario =  () => {
    mario.classList.add("jump")
    setTimeout(()=>{
        mario.classList.remove("jump")
    }, 500)
}

const loop = setInterval(()=> {
    const pipePosition = pipe.offsetLeft
    const cloudPosition = cloud.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(marioPosition)
        if(pipePosition <= 61 && pipePosition > 0 && marioPosition < 85) {

            cloud.style.animation = `none`
            cloud.style.left = `${cloudPosition}px`
            
            pipe.style.animation = `none`
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = `none`
            mario.style.bottom = `${marioPosition}px`

            mario.src = `./assets/img/gamer-over.png`
            mario.style.width = `55px`
            mario.style.marginLeft = `20px`
            
            clearInterval(loop)
        }
        
}, 10)

document.addEventListener("keydown", jumpMario)
document.addEventListener("touchstart", jumpMario)
