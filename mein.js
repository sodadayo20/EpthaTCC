import './src/mp3.js';

// ./icons/vllage3E.png
window.onload = async function () {
    const setups = await (await fetch('./data.json')).json();
    const imageSetup = setups.emojiSetup;
    const musicObj = setups.musics;
    musicObj.map(e => {
        let op = document.createElement('option');
        op.value = e[0];
        op.innerHTML = e[1];
        document.querySelector('select#trackList').append(op);
    })
    const ir = new imgRep(document.querySelector('.cont main'), imageSetup)
    ir.replaceAll();
};