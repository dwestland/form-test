export default(state = ["labrador", "hound", "poodle"], payload) => {
  switch(payload.type) {
    case 'ADD':
      return [...state, payload.item];
    default:
    return state;
  }
}