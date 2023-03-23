
const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: {}
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      }
    case 'GET_NAME_POKEMONS':
      return {
        ...state,
        pokemons: action.payload
    
      }
    case 'GET_TYPES':
      return {
        ...state,
        types: action.payload
      }
    case 'FILTER_BY_TYPES':
      const typeFilter = action.payload === 'all' ? 
      state.allPokemons : 
      state.allPokemons?.filter(e => e.type?.includes(action.payload))
      return {
        ...state,
        pokemons: typeFilter
      }
      case 'ORDER_BY_NAME':
      const sort = action.payload === 'A-Z' ? state.pokemons.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0
      }) : state.pokemons.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0
      })
      return {
        ...state,
        pokemons: sort
      }
    case 'FILTER_CREATED':
    
      const filterCreated = action.payload === 'created' ? state.allPokemons.filter(e => e.createBD) : state.allPokemons.filter(e => !e.createBD)
      return {
        ...state,
        pokemons: action.payload === 'all' ? state.allPokemons : filterCreated
      }
    
    case 'FILTER_ATTACK':
      const sortAttack = action.payload === 'strong' ? state.pokemons.sort(function (a, b) {
        if (a.attack > b.attack) {
          return 1;
        }
        if (b.attack > a.attack) {
          return -1
        }
        return 0
      }) : state.pokemons.sort(function (a, b) {
        if (a.attack > b.attack) {
          return -1;
        }
        if (b.attack > a.attack) {
          return 1;
        }
        return 0
      })
      return {
        ...state,
        pokemons: sortAttack
      }
      case 'POST_POKEMONS':
      return {
        ...state,
      }
    case 'GET_DETAILS':
      return {
        ...state,
        detail: action.payload
      }
      case 'RESET_STATE':
        return{
          ...state,
          detail: {}
        }
    default: return state;
  }
}
export default rootReducer;


