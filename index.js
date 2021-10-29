function img(src, position, left, bottom) {
    let image = document.createElement('img')
    image.src = src
    image.style.position = position
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}

img('assets/green-character.gif', 'fixed', 100, 100)
img('assets/pine-tree.png', 'fixed', 450, 200)
img('assets/tree.png', 'fixed', 200, 300)
img('assets/pillar.png', 'fixed', 350, 100)
img('assets/crate.png', 'fixed', 150, 200)
img('assets/well.png', 'fixed', 500, 425)



function newItem(src, position, left, bottom) {
    let image = img(src, position, left, bottom)

    image.addEventListener('click', function () {
        image.remove()
    })
}

newItem('assets/sword.png', 'fixed', 500, 405);
newItem('assets/shield.png', 'fixed', 165, 185);
newItem('assets/staff.png', 'fixed', 600, 100);
