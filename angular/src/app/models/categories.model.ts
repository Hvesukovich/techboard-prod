/**
 * Created by Sergei on 16.05.2017.
 */
export class CategoryModel {
    public id;
    public name;
    public parent_id;
    public title;
    public description;
    public text;
    public keywords;
    public show;

    constructor(obj) {
        this.id = obj['id'];
        this.name = obj['name'];
        this.parent_id = obj['parent_id'];
        this.title = obj['title'];
        this.description = obj['description'];
        this.text = obj['text'];
        this.keywords = obj['keywords'];
        this.show = obj['show'];
    }
}