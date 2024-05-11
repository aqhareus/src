export class Product {

    constructor(
        public prd_id : number,
        public title : string,
        public description : string,
        public price : number,
        public company : string,
        public img : string
    ){
        this.prd_id = prd_id
        this.title = title
        this.description = description
        this.price = price
        this.company = company
        this.img = './assets/img/' + img

    }
}