export default (state = {}, action) => {
    const {  } = action;
    switch (action.type) {
        case 'ADD_KEG':
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
        case 'DELETE_KEG':
            let newState = { ...state };
            delete newState[id];
            return newState;
        default:
            return state;
    }
};