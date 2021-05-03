import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'Blackout Brew',
      brand: 'Bardins Stock',
      price: '8.75',
      alcoholContent: '18%',
      pints: 124,
      id: 1
    })).toEqual({
      type: 'ADD_KEG',
      name: 'Blackout Brew',
      brand: 'Bardins Stock',
      price: '8.75',
      alcoholContent: '18%',
      pints: 124,
      id: 1
    });
  });
  it('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectedKeg({
      name: 'Blackout Brew',
      brand: 'Bardins Stock',
      price: '8.75',
      alcoholContent: '18%',
      pints: 124,
      id: 1
    })).toEqual({
      type: 'SELECTED_KEG',
      name: 'Blackout Brew',
      brand: 'Bardins Stock',
      price: '8.75',
      alcoholContent: '18%',
      pints: 124,
      id: 1
    });
  });
  it('unselectKeg should create UNSELECT_KEG action', () => {
    expect(actions.unselectKeg()).toEqual({
      type: 'UNSELECT_KEG'
    });
  });
});