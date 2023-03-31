import { makeAutoObservable } from "mobx"

class Tokenchange {
    refresh_token = null
    access_token = null
    constructor(){
        makeAutoObservable(this)
    }

    addtoken(refresh_token, access_token) {
        this.refresh_token = refresh_token
        this.access_token = access_token
        console.log('access_token -', this.access_token)
        console.log('refresh_token -', this.refresh_token)
    }

    deletetoken() {
        this.refresh_token = null
        this.access_token = null
        console.log('access_token -', this.access_token)
        console.log('refresh_token -', this.refresh_token)
    }

}

export default new Tokenchange()