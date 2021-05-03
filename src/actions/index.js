export const deleteKeg = id => ({ type: 'DELETE_KEG', id });

export const toggleForm = () => ({ type: 'TOGGLE_FORM'});

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pints, id } = keg;
  return {
    type: "ADD_KEG",
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id
  }
}

export const selectedKeg = (keg) => {
  const { name, brand, price, alcoholContent, pints, id } = keg;
  return {
    type: "SELECTED_KEG",
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id
  }
}

export const unselectKeg = () => {
  return {
    type: "UNSELECT_KEG"
  }
}

export const restockKeg = id => ({
  type: "RESTOCK_KEG",
  id
})

export const buyPint = id => ({
  type: "BUY_PINT",
  id
})