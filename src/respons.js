const response = (statusCode, data, message, res) => {
    res.status(statusCode).json([
        {
            datas: data,
            message,
            metadata: {
                prev: "",
                next: "",
                curent: ""
            }
        }
    ])
}

module.exports = response