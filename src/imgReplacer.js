class imgRep {
    /**
     * 
     * @param {HTMLElement} elem container elem.
     * @param {Object} obj image name list. 
     */
    constructor(elem, obj) {
        this.cont = elem;
        this.d = obj;
    }
    /**
     * replaceAll Tags from Gui with given params on init.
     */
    replaceAll() {
        const reg = /\{.*\}/gm;
        const itr = Array.from(this.cont.children);
        let hasTag = eH => eH.match(reg) != null;
        let getTag = eH => eH.match(reg)[0].replaceAll('{', '').replaceAll('}', ',').split(',').slice(0, -1);
        //console.log(itr, this.d)
        itr.map(e => {
            //has a Tag like {vllage3E} on element?
            let eH = e.innerHTML;
            if (hasTag(eH)) {
                let imgs = getTag(eH).map(i => `<img class="icon" src="./icons/${i}${this.d[i].t}">`);
                e.innerHTML = eH.replace(eH.match(reg)[0], imgs.join(''));
            }
        })
    }
}