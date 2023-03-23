import axios from 'axios';

export function getPokemons() {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/pokemons')
      return dispatch({
        type: 'GET_POKEMONS',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      return dispatch({
        type: 'GET_NAME_POKEMONS',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getTypes() {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/types')
      return dispatch({
        type: 'GET_TYPES',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  };
}

export function postPokemons(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.post('http://localhost:3001/pokemons', payload)
      return json;
    } catch (error) {
      console.log(error)
    }
  };
}

export function filterPokemonsByTypes(payload) {
  return {
    type: 'FILTER_BY_TYPES',
    payload: payload
  }
}

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload
  }
}

export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
}

export function filterAttack(payload) {
  return {
    type: 'FILTER_ATTACK',
    payload
  }
}

export function getDetail(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons/" + payload);
      return dispatch({
        type: 'GET_DETAILS',
        payload: json.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function restState (payload){
  return{
    type: 'RESET_STATE',
    payload
  }
}