class tabsRush {
    constructor(boxBtn, options){
        this.containerBtn = document.getElementById(`${boxBtn}`)
        this.options = options;
        this._render(options)
    }
    _render(options){
        this.containerBtn.addEventListener('click',(e)=> {
            let tabsButton = e.target
            this._tabsRender(tabsButton, options)
        })
    }
    _tabsRender(tabsButton, options){
        if (tabsButton.closest('.rushButton')){
            for (let i=0; i < options.tabs.length; i++){
                let btnActive= document.getElementById(`${options.tabs[i].btn}`)
                let itemActive= document.getElementById(`${options.tabs[i].item}`)
                btnActive.classList.remove(`${this._buttonActive()}`)
                itemActive.classList.remove(`${this._itemActive()}`)
                tabsButton.classList.add(`${this._buttonActive()}`)
                if(tabsButton.id == btnActive.id){
                    itemActive.classList.add(`${this._itemActive()}`)
                }
            }
        }
    }
    _buttonActive(){
        if (this.options.buttonActive === undefined){
            return 'rushButton-active'
        } else {
            return `${this.options.buttonActive}`
        }
    }
    _itemActive(){
        if (this.options.itemActive === undefined){
            return 'rushItem-active'
        } else {
            return `${this.options.itemActive}`
        }
    }
}


