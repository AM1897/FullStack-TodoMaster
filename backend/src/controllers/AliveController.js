import StatusCode from "../utils/StatusCode.js"

const isAlive = (req, res) => {
    res.status(StatusCode.OK).send(`API Lever`)
}

export default {
    isAlive
}