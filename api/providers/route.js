// generate error or succes for API

exports.generateError = (statusCode, message, res) => {
    res.status(statusCode);
    res.json({ message });
}

exports.generateSuccess = (statusCode, data, res) => {
    res.status(statusCode);
    res.json(data);
}