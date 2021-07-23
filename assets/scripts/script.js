const range = document.querySelector('#range_bar');
const neonFrame = document.querySelector('.neon_frame');

range.addEventListener('mousemove', (e)=>{
    changeColor(e.target.value);
})
range.addEventListener('change', (e)=>{
    changeColor(e.target.value);
})

const changeColor = (value) => {
    neonFrame.style.filter = `hue-rotate(${value}deg) saturate(5)`
}