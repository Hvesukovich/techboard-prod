export class GoodModel {
    public id;
    public name;
    public categories_id;
    public users_id;
    public title;
    public description;
    public text;
    public video_link;
    public map;
    public price;
    public old_price;
    public keywords;
    public show;
    public created_at;
    public updated_at;

    constructor(obj) {
        this.id = obj['id'];
        this.name = obj['name'];
        this.categories_id = obj['categories_id'];
        this.users_id = obj['users_id'];
        this.title = obj['title'];
        this.description = obj['description'];
        this.text = obj['text'];
        this.video_link = obj['video_link'];
        this.map = obj['map'];
        this.price = obj['price'];
        this.old_price = obj['old_price'];
        this.keywords = obj['keywords'];
        this.show = obj['show'];
        this.created_at = obj['created_at'];
        this.updated_at = obj['updated_at'];
    }
}