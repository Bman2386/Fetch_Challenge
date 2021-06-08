import {GET_POINTS, GET_POINT } from '../actions/other'

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
        default:
        return state
    }
}

export default PointReducer