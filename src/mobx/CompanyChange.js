import { makeAutoObservable } from "mobx"

class CompanyChange {
    company_id = null
    constructor(){
        makeAutoObservable(this)
    }

    addid(company_id) {
        this.company_id = company_id
    }

    deleteid() {
        this.company_id = null
    }

}

export default new CompanyChange()