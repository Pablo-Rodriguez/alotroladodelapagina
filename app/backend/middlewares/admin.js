
export default function (redirect) {
    return (req, res, next) => {
        if (req.isAuthenticated() && req.user.admin) {
            return next();
        }
        res.redirect(redirect);
    };
}
