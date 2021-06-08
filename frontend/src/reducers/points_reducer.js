import {GET_POINTS, GET_POINT, DELETE_POINT } from '../actions/other'

const PointReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_POINTS:
          const points = {}
          action.points.forEach(point => {
              points[point.id] = point;
          })  
         return points 
         case GET_POINT:
             return Object.assign({}, action.point) 
        case DELETE_POINT:
            return state 
        default:
        return state
    }
}

export default PointReducer