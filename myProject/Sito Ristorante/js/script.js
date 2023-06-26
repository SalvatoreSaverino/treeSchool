let colla = document.querySelector('#colla')


document.addEventListener('scroll', function(){

    let top = window.pageYOffset
            
    if(top < 400){

        colla.style.position = 'absolute';
        colla.style.top= '65vh';

    }
    else{

        colla.style.position = 'sticky';
        colla.style.top=0;
                
    }
})



let iconaslider = document.querySelector('#iconaslider');

iconaslider.addEventListener('click', function (){
    let slideshow  = document.querySelector('#slideshowwrapper');
    let slideWidth = 267;
    const distance = slideWidth;

    let left = slideshow.getAttribute('data-left') - distance;
    if (Math.abs(left) >= (slideWidth*6)) {
        left = 0;
    }

    slideshow.style.marginLeft = left + 'px';
    slideshow.setAttribute('data-left', left)
})