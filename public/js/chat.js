const socket = io();

socket.on('countUpdate', (count) => {
    console.log('the cont has been update', count)

})

window.onload = function () {
    document.querySelector('#bt').addEventListener('click', () => {
        console.log('clicked')
        socket.emit('bt')
    })
}

