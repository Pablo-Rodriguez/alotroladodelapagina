
export default class Default {
    constructor (rex) {
        rex.get('*', this.get);
    }

    get (req, res) {
        res.redirect('/#/');
    }
}
