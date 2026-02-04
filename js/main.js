const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.src = "./img/icons/nav-close.svg"

    }
    else {
        navBtnImg.src = "./img/icons/nav-open.svg"
    }
}

AOS.init();


let popupContainer = document.querySelector('.popup-container');
let previewBox = popupContainer.querySelectorAll('.preview');


// portfolio container.project

for (const value of previewBox.values()) {
    console.log(value);
}

document.querySelectorAll('.project-title').forEach(product => {
    product.onclick = () => {popupContainer.style.display = 'flex'; 
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');               
            };
        }
    );
    };

});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        popupContainer.style.display = 'none';

    };
});





