import { LISTCHANGE, LISTADD, LISTDELETE, GETLIST, CHANGEAREA } from './actionTypes';

export const changeListAction = (value) =>({
    type:LISTCHANGE,
    value:value
})
export const listAddAction = (value) => ({
    type:LISTADD,
    value:value
})
export const listDeleteAction = (value) => ({
    type:LISTDELETE,
    value:value
})
export const getList = (value) => ({
    type:GETLIST,
    value:value
})

export const changeAreaa = (value) =>({
    type:CHANGEAREA,
    value:value
})