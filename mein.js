import './src/mp3.js';

// ./icons/vllage3E.png
const load = async () => {
    const setups = await (await fetch('./data.json')).json();
    const imageSetup = setups.emojiSetup;
    const musicObj = setups.musics;
    musicObj.map(e => {
        let op = document.createElement('option');
        op.value = e[0];
        op.innerHTML = e[1];
        document.querySelector('select#trackList').append(op);
        let iframe = document.getElementsByTagName('iframe')[0];
        iframe.onload = () => {
            iframe.classList.toggle('show');
            document.querySelector('main.chat').classList.toggle('show');
        }
    })
    const ir = new imgRep(document.querySelector('.cont main'), imageSetup)
    ir.replaceAll();

}
window.onload = load;