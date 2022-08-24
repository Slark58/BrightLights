

let offset = 0;
let slideIndex = 1;

const wrapper = document.querySelector('.slider__wrapper'),
    content = document.querySelectorAll('.slider__wrapper-content'),
    prev = document.querySelector('.slider__wrapper-left'),
    next = document.querySelector('.slider__wrapper-right'),
    learn = document.querySelector('.slider__learn'),
    width = window.getComputedStyle(learn).width;
    



wrapper.style.width = 100 * content.length + '%';
wrapper.style.display = 'flex';
wrapper.style.transition = '0.5s all';

learn.style.overflow = 'hidden';

content.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if (offset == (+width.slice(0, width.length - 2) * (content.length - 1))) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2); 
    }

    wrapper.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == content.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }


});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (content.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    wrapper.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = content.length;
    } else {
        slideIndex--;
    }


});



class cards {
    constructor(src, span, info, data, link, parent) {
        this.src = src;
        this.span = span;
        this.info = info;
        this.data = data;
        this.link = link;
        this.content = document.querySelector(parent);

    }

    render() {
        const element = document.createElement('div');

        element.classList.add('slider__wrapper-content-item');

        element.innerHTML = `
            <img src=${this.src} alt="foto">
            <div class="slider__wrapper-content-item-span">${this.span}</div>
            <div class="slider__wrapper-content-item-info">${this.info}</div>
            <div class="slider__wrapper-content-item-wrap m1">
                <div class="slider__wrapper-content-item-wrap-data">${this.data}</div>
                <div class="slider__wrapper-content-item-wrap-link"><a href="#">${this.link}</a></div>
            </div>
        `

        this.content.append(element);

    }
}



// const card1 = new cards("src/img/slieri.png", "Chandler, AZ", "The Park at Wild Horse Pass", "Apr 02 2021", "tickets", ).render();


const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Some Problems`);
    }

    return await res.json();
};

getResource('http://localhost:3000/slide')
    .then(data => {
        data.forEach(({img, span, info, data, link}) => {
            new cards(img, span, info, data, link, ".slider__wrapper-content").render()
        })
    })

