import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  let action;
  it('Should return the default state if no action type is given', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null)
  })

  it('should set selectedKeg to value of keg', () => {
    action = {
      type: 'SELECTED_KEG',
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    };
    expect(selectedKegReducer({}, action)).toEqual({
      name: 'a beer',
      brand: 'beer brand',
      price: '$6',
      alcoholContent: '5%',
      remainingStock: 124,
      id: 1
    })
  })

  it('should set selectedKeg to an empty object', () => {
    action = {
      type: 'UNSELECT_KEG'
    };
    expect(selectedKegReducer({}, action)).toEqual({})
  });
});