export class GoodModel {
    public id = null;
    public name = null;
    public categories_id = null;
    public users_id = null;
    public title = null;
    public description = null;
    public text = null;
    public video_link = null;
    public map = null;
    public price = null;
    public old_price = null;
    public keywords = null;
    public show = null;
    public created_at = null;
    public updated_at = null;

    constructor(obj){
        this.update(obj);
    }
    
    public update(obj) {
        if(obj['id']){
            this.id = obj['id'];
        }
        if(obj['name']){
            this.name = obj['name'];
        }
        if(obj['categories_id']){
            this.categories_id = obj['categories_id'];
        }
        if(obj['users_id']){
            this.users_id = obj['users_id'];
        }
        if(obj['title']){
            this.title = obj['title'];
        }
        if(obj['description']){
            this.description = obj['description'];
        }
        if(obj['text']){
            this.text = obj['text'];
        }
        if(obj['video_link']){
            this.video_link = obj['video_link'];
        }
        if(obj['map']){
            this.map = obj['map'];
        }
        if(obj['price']){
            this.price = obj['price'];
        }
        if(obj['old_price']){
            this.old_price = obj['old_price'];
        }
        if(obj['keywords']){
            this.keywords = obj['keywords'];
        }
        if(obj['show']){
            this.show = obj['show'];
        }
        if(obj['created_at']){
            this.created_at = obj['created_at'];
        }
        if(obj['updated_at']){
            this.updated_at = obj['updated_at'];
        }
    }
}