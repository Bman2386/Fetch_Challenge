import {
    getShops,
    getPoints,
    createPoints,
    updatePoint,
    destroyPoint
} from '../utils/other'

export const GET_SHOPS = 'GET_SHOPS'
export const GET_POINTS = 'GET_POINTS'
export const GET_POINT = 'GET_POINT'
export const DELETE_POINT = 'DELETE_POINT'



export const receiveShops = (shops) => ({
    type: GET_SHOPS,
    shops
})

export const receivePoints = points => {
    return {
        type: GET_POINTS,
        points
    }
}

export const receivePoint = point => ({
    type: GET_POINT,
    point
})
export const deletePoints = () => ({
    type: DELETE_POINT
})
export const fetchPoints = ownerId => dispatch => {
    return (
        getPoints(ownerId)
        .then(points => dispatch(receivePoints(points)))
    )
}

export const createPoint = point => dispatch => {
    return (
        createPoints(point)
        .then(point => dispatch(receivePoint(point)))
    )
}

export const updatePoints = points => dispatch => {
    return (
        updatePoint(points)
        .then(point => dispatch(receivePoint(point)))
    )
}

export const deletePoint = pointId => dispatch => {
    return (
        destroyPoint(pointId)
        .then(() => dispatch(deletePoints()))
    )
}
export const fetchShops = () => dispatch => {
    return (
        getShops()
        .then((shops) => dispatch(receiveShops(shops)))
    )
}