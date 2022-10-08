//  price slider --- start ---
const initPriceRangeSlider = () => {
    const priceRangeSlider_DOM = document.querySelector('#priceSlider')
    const price_from = document.querySelector('#price_from')
    const price_to = document.querySelector('#price_to');

    if (priceRangeSlider_DOM !== undefined) {
        noUiSlider.create(priceRangeSlider_DOM, {
            start: [980, 20465],
            connect: true,
            range: {
                'min': 0,
                'max': 50000
            },
            format: {
                to: (val) => {
                    return parseFloat(val)
                },
                from: (val) => {
                    return parseFloat(val)
                }
            }
        });
        priceRangeSlider_DOM.noUiSlider.on('update', function () {
            let min = Math.floor(this.get(true)[0]);
            let max = Math.floor(this.get(true)[1]);

            price_from.value = min;
            price_to.value = max;
        });

    }

    function setValueInSlider(slider, inputFrom, inputTo) {
        inputFrom.addEventListener('change', function () {
            slider.noUiSlider.set([this.value, null]);
        });

        inputTo.addEventListener('change', function () {
            slider.noUiSlider.set([null, this.value]);
        });
    }

    setValueInSlider(priceRangeSlider_DOM, price_from, price_to)

}
initPriceRangeSlider();
//  price slider --- end ---


// accordion in filters -- start--
const initAccordion = ()=>{
    const filters = document.querySelector('#filters')
    if(filters !== undefined){
        const filter_items = filters.querySelectorAll('.filter_item')

        filter_items.forEach((element)=>{
            const filterToggle = element.querySelector('.item_head')

            filterToggle.addEventListener('click',()=>{
                if (element.classList.contains('active')){
                    element.classList.remove('active')
                }else {
                    element.classList.add('active')
                }
            })

        })
    }

}
initAccordion()
// accordion in filters -- end--


// filters sidebar --- start---
const initFilters_mobile =()=> {
    if(window.innerWidth <= 979){
        const html = document.querySelector('html')
        const filtersToggle_btn = document.querySelector('#filters_toggle')
        const filters = document.querySelector('#filters')

        // open/close sideBar
        filtersToggle_btn.addEventListener('click', ()=>{
            html.classList.add('sidebar_open')
        })

        html.addEventListener('click',(event)=>{
            if(html.classList.contains('sidebar_open')) {
                if(event.target.closest('.filter_items') === null && event.target.id !== 'filters_toggle'){
                    html.classList.remove('sidebar_open')
                }
            }
        })
    }
}
initFilters_mobile()
// filters sidebar --- end---

// mobile-navigation  --- start---
const initNavigation_mobile =()=>{
    if(window.innerWidth <= 979){
        const html = document.querySelector('html')
        const navigationToggle_btn = document.querySelector('#menu_burger')
        const navigation = document.querySelector('#navigation')

        // open/close sideBar
        navigationToggle_btn.addEventListener('click', ()=>{
            html.classList.add('navigation_open')
        })

        html.addEventListener('click',(event)=>{
            if(html.classList.contains('navigation_open')) {
                if(event.target.closest('nav') === null && event.target.id !== 'menu_burger'){
                    html.classList.remove('navigation_open')
                }
            }
        })
    }
}
initNavigation_mobile()
// mobile-navigation  --- end---

