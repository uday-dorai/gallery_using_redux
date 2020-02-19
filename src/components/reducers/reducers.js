import { GET_IMAGE_SUCCESS, ADD_FAVORITE_SUCCESS, TOGGLE_SUCCESS,REMOVE_FROM_FAVORITE_SUCCESS,SEARCH_IMAGE_SUCCESS } from '../constants'
import { combineReducers } from 'redux'

const initialState = {
    status: 'imageCollection',
    imageCollection: [],
    favorite: []
}

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_IMAGE_SUCCESS:
            // console.log(action.payload)
            const data = action.payload;
            return {
                ...state,
                imageCollection: data
            }

        case SEARCH_IMAGE_SUCCESS:
            
        return{
            favorite:state.favorite,
            imageCollection:action.payload.map(item => { state.favorite.map(fav => {
                                                            if(fav.id === item.id){
                                                                item ={
                                                                    favorite:fav.favorite,
                                                                    id:item.id,
                                                                    urls:{
                                                                        thumb:fav.urls.thumb
                                                                    }
                                                                }
                                                            }
                                                        })
                                                        return item
                                                    })
        }


        case ADD_FAVORITE_SUCCESS:
            
            const id = action.payload.id;
            const favorite = state.favorite.concat(action.payload);
            return {
                // ...state,
                favorite: favorite,
                imageCollection: state.imageCollection.map(data => {
                    if (data.id === id) {
                        return {
                            favorite: action.payload.favorite,
                            id: action.payload.id,
                            urls: {
                                thumb: action.payload.urls.thumb
                            }
                        }
                    }else{
                        return data
                    }
                })
            }
        
        case REMOVE_FROM_FAVORITE_SUCCESS:
            
            const removeid = action.payload.id;
            return{
                ...state,
                favorite:state.favorite.filter(data =>{
                    if (data.id !== removeid) {
                        // console.log(data)
                        return {
                            data
                        }
                    }
                }),
                imageCollection: state.imageCollection.map(data => {
                    if (data.id === removeid) {
                        return {
                            favorite: action.payload.favorite,
                            id: data.id,
                            urls: {
                                thumb: data.urls.thumb
                            }
                        }
                    }else{
                        return data
                    }
                })

            }

        case TOGGLE_SUCCESS:
            // console.log('reducer', action.payload)/
            const toggle = action.payload;
            return {
                ...state,
                status: toggle,

            }

        default:
            return state;
    }
},
    rootReducer = combineReducers({
        gallery: reducers
    });

export default rootReducer;