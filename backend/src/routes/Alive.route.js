import AliveController from "../controllers/AliveController.js"

const AliveRoute = (app) => {
    app.get('/', AliveController.isAlive)
}

export default {
    AliveRoute
}