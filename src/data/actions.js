// strong-type actions to catch bugs early
export const actions = {
  removeFeature: 'remove-feature',
  buyItem: 'buy-item',
  addFeature: 'add-feature'
}


export function removeFeature(id) {
  return {
    type: actions.removeFeature,
    payload: id
  }
}

export function addFeature(feature) {
  return {
    type: actions.addFeature,
    payload: feature
  }
}