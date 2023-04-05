import Board from "pages/board"
import { RoutesConstent } from "constants/routes"

const routes = [{
    path: RoutesConstent.board,
    Component: Board,
    children: []
}, {
    path: RoutesConstent.other,
    Component: Board,
    children: []
}]

export default routes;
