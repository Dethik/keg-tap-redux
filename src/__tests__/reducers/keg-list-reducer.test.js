import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
  let action;
  let updateAction;
  const kegData = {
    name: 'Blackout Stout',
    brand: 'Bardins Brews',
    price: '12.75',
    alcoholContent: '18.76%',
    pints: 20,
    id: 1,
  };
  const currentState = {
    1: {
      name: 'Blackout Stout',
      brand: 'Bardins Brews',
      price: '12.75',
      alcoholContent: '18.76%',
      pints: 20,
      id: 1},
    2: {
      name: 'Tiger Eye Lager',
      brand: 'Bardins Brews',
      price: '8.25',
      alcoholContent: '8.72%',
      pints: 20,
      id: 2}
    }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, pints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id,
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id,
      }
    });
  });

  test('Should successfully edit keg data on masterKegList', () => {
    const { name, brand, price, alcoholContent, pints, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id,
    };

    updateAction = {
      type: 'ADD_KEG',
      name: 'Tiger Eye Lager',
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id,
    };

    const newKeg = kegListReducer({}, action);
    expect(kegListReducer(newKeg, updateAction)).toEqual({
      [id] : {
        name: 'Tiger Eye Lager',
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id,
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'Tiger Eye Lager',
        brand: 'Bardins Brews',
        price: '8.25',
        alcoholContent: '8.72%',
        pints: 20,
        id: 2}
    });
  });
})