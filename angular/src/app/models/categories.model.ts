export class CategoryModel {
    public id = null;
    public name = null;
    public parent_id = null;
    public title = null;
    public description = null;
    public text = null;
    public keywords = null;
    public show = null;

    constructor(obj) {
        if(obj['id']){
            this.id = obj['id'];
        }
        if(obj['name']){
            this.name = obj['name'];
        }
        if(obj['parent_id']){
            this.parent_id = obj['parent_id'];
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
        if(obj['keywords']){
            this.keywords = obj['keywords'];
        }
        if(obj['show']){
            this.show = obj['show'];
        }
    }
}