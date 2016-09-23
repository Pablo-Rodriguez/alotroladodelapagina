
export default class home {
    constructor (rex) {
	rex.get('/', this.get.bind(this));
    }

    get (req, res) {
	res.render('home');
    }

}
