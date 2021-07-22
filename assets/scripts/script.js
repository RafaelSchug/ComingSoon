const range = document.querySelector('#range_bar');
const neonFrame = document.querySelector('.neon_frame');

range.addEventListener('mousemove', (e)=>{
    
    const value = e.target.value;
    neonFrame.style.filter = `hue-rotate(${value}deg) saturate(5)`
})