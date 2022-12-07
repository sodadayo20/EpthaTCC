// ./icons/vllage3E.png
const imageSetup  = {
    'vllage3E': {
        t: '.png'
    },
    'vllage3Oenbong': {
        t: '.gif'
    },
    'vllage3Sarang': {
        t: '.png'
    },
    'vllage3Ureshi': {
        t: '.gif'
    }
}
const load = () => {
    const ir = new imgRep(document.querySelector('.cont main'), imageSetup)
    ir.replaceAll();

}
window.onload = load;