function img(src, left, bottom) {
    let image = document.createElement('img')
    image.src = src
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}

img('assets/green-character.gif', 100, 100)
img('assets/pine-tree.png', 450, 200)
img('assets/tree.png', 200, 300)
img('assets/pillar.png', 350, 100)
img('assets/crate.png', 150, 200)
img('assets/well.png', 500, 425)



function newItem(src, left, bottom) {
    let image = img(src, left, bottom)

    image.addEventListener('click', function () {
        image.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
