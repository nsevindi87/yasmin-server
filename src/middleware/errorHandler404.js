export default function errorHandler404(err, req, res, next) {
    res.status(err.status || 404)
        .json({ status: err.status, message: err.message || "Not Found!!!!!!" });
}