import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  let action;
  it('Should return the default state if no action type is given', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null)
  })
});