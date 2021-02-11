import gsap from "gsap/gsap-core";
import { Container, Sprite, Text, TextStyle } from "pixi.js";

export default class MagicHat extends Container {
    constructor() {
        super()
        this.name = 'magic-hat'
        this._body = this._createHatSprite();
        this._item = this._createItemText();
        this.interactive = true;
        this.buttonMode = true;
        this._setMaskToItem()
        this.data = {
            emojiArr: ['💇🏼', '💇🏾', '🦀', '👿', '👱', '💇‍♂️', '👹']
        }
    }
    
    async throwRandomEmoji() {
        this._item.text = this._getRandomEmoji()

        await gsap.fromTo(this._item, { y: 0 }, { y: -300, duration: 1, ease: 'elastic' })
    }

    /**
    * @private
    */
    _createHatSprite() {
        const hat = new Sprite.from('hat')
        hat.anchor.set(0.5)
        this.addChild(hat)

        return hat;
    }

    /**
    * @private
    */
    _createItemText() {
        const txt = new Text("")
        txt.anchor.set(0.5)
        txt.style = new TextStyle({
            fontSize: 200,
            align: 'center',
        })

        this.addChild(txt)

        return txt;
    }

    /**
    * @private
    */
    _setMaskToItem() {
        const mask = new Sprite.from('mask')
        mask.anchor.set(0.5)
        mask.y = -350
        this.addChild(mask)
        this._item.mask = mask
        this._item.mask.height = 500;
    }

    /**
    * @private
    */
    _getRandomEmoji() {
        return this.data.emojiArr[Math.floor(Math.random() * this.data.emojiArr.length)];
    }
}