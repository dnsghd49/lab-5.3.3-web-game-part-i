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


function newItem (src, position, left, bottom) {
    let image = img (src, position, left, bottom)

    image.addEventListener('click', function() {
        image.remove()
    })
}

newItem('assets/sword.png', 'fixed', 500, 405);

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// let shield = document.createElement('img')
// shield.src = 'assets/shield.png'
// shield.style.position = 'fixed'
// shield.style.left = '165px'
// shield.style.bottom = '185px'
// document.body.append(shield)

// let staff = document.createElement('img')
// staff.src = 'assets/staff.png'
// staff.style.position = 'fixed'
// staff.style.left = '600px'
// staff.style.bottom = '100px'
// document.body.append(staff)
