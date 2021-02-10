import gsap from "gsap/gsap-core";
import { Container, Sprite, Text, TextStyle } from "pixi.js";

export default class MagicHat extends Container {
    constructor() {
        super()
        this.name = 'magic-hat'
        this._item = this._createItemText();
        this._body = this._createHatSprite();
        this.interactive = true;
        this.buttonMode = true;
    }

    _createHatSprite() {
        const hat = new Sprite.from('hat')
        hat.anchor.set(0.5)
        this.addChild(hat)

        return hat;
    }

    _createItemText() {
        const txt = new Text("")
        txt.anchor.set(0.5)

        txt.style = new TextStyle({
            fontSize: 200,
            align: 'center'
        })

        this.addChild(txt)

        return txt;

    }

    throwRandomEmoji() {
        this._item.text = this._getRandomEmoji()
        gsap.fromTo(this._item, {y:0}, {y: -300, duration: 1, ease:'elastic'})
    }

    get emojis() {
        return { emojiArr: ['💇🏼' , '💇🏾', '🦀', '👿', '👱', '💇‍♂️', '👹',] }
    }

    _getRandomEmoji(){
        return this.emojis.emojiArr[Math.floor(Math.random() * this.emojis.emojiArr.length)];
    }
}