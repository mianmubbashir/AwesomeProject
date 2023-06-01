import UserList from '../UserList';
import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants';

export function addToCart (item: any) { // no 2
    return{
        type: ADD_TO_CART,
        data: item
    }
}

export function removeFromCart (item: any) {
    return{
        type: REMOVE_FROM_CART,
        data: item
    }
}

export function getUserList (item: any) {
    return{
        type: USER_LIST,
        data: item
    }
}
