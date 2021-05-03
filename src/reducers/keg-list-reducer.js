import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
    const { name, brand, price, alcoholContent, pints, id } = action;
    switch (action.type) {
        case c.ADD_KEG:
            return Object.assign({}, state, {
                [id]: {
                    name: name,
                    brand: brand,
                    price: price,
                    alcoholContent: alcoholContent,
                    pints: pints,
                    id: id,
                }
            });
        case c.DELETE_KEG:
            let newState = { ...state };
            delete newState[id];
            return newState;
        case c.RESTOCK_KEG:
            let restockState = { ...state };
            restockState[id].pints = 124;
            return restockState;
        case c.BUY_PINT:
            let pintsState = { ...state };
            pintsState[id].pints--;
            return pintsState;
        default:
        return state;
    }
};