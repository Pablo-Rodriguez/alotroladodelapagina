
export default function (redirect) {
    return (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect(redirect);
    };
}
