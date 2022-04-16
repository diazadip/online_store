import {
    SUCCESS_FETCHING_CATEGORIES,
    START_FETCHING_CATEGORIES,
    ERROR_FETCHING_CATEGORIES,
} from './constants';

import { getCategories } from '../../api/categories';

export const fetchCategories = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchingCategories());
        try {
            let { data: { data } } = await
                getCategories();
            dispatch(successFetchingCategories({ data }));
        } catch (err) {
            dispatch(errorFetchingCategories());
        }
    }
}

export const startFetchingCategories = () => {
    return {
        type: START_FETCHING_CATEGORIES
    }
}

export const successFetchingCategories = (payload) => {
    return {
        type: SUCCESS_FETCHING_CATEGORIES,
        ...payload
    }
}

export const errorFetchingCategories = () => {
    return {
        type: ERROR_FETCHING_CATEGORIES
    }
}