let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let sidebar = document.querySelector('.sidebar');

btnClose.onclick = function() {
    sidebar.classList.add('hide');
    btnClose.classList.add('hide');
    btnOpen.classList.remove('hide');
}

btnOpen.onclick = function() {
    sidebar.classList.remove('hide');
    btnOpen.classList.add('hide');
    btnClose.classList.remove('hide');
}