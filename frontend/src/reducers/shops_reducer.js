import {GET_SHOPS } from '../actions/other'

const otherReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GET_SHOPS:
          const shops = {}
          action.shops.forEach(shop => {
              shops[shop.id] = shop;
          })  
         return shops   
        default:
        return state
    }
}

export default otherReducer