const drums = document.querySelectorAll('.keys');

drums.forEach(keys => {
    keys.addEventListener('click', () => playSound(keys))
})

const playSound = (e) => {
    const audio = document.getElementById(e.audio)
    audio.play()
    e.classList.add('active')
    audio.addEventListener('ended', () => {
        e.classList.remove('active')
    })
}
