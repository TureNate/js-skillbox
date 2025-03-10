const imgList = document.querySelectorAll('.preview-container img')
const imgContainer = document.querySelector('.img-container')

imgList.forEach(img => {
    img.addEventListener('click', function() {
        imgContainer.innerHTML = ''
        const newImg = document.createElement('img')
        newImg.setAttribute('src', img.getAttribute('src'))
        imgContainer.append(newImg)
    })
});