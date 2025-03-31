export class Product {
    constructor(id, title, price, description, images = []) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._description = description;
        this._images = images;
    }

    get id() { return this._id; }
    get title() { return this._title; }
    get price() { return this._price; }
    get description() { return this._description; }
    get images() { return this._images; }
    get mainImage() { return this._images.length > 0 ? this._images[0] : null; }

    // Reglas de negocio a nivel de entidad
    isValidPrice() {
        return this._price > 0;
    }

    hasValidImages() {
        return this._images.length > 0 && this._images.every(url => url && url.startsWith('http'));
    }

    getFormattedPrice() {
        return `$${this._price.toFixed(2)}`;
    }
}
