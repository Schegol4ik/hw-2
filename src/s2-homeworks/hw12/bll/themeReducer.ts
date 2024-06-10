type ThemeActions = {
    type: 'SET_THEME_ID',
    id: number
}
export type ThemeStateType = {
    themeId: number
}
const initState = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ThemeActions): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeActions => ({ type: 'SET_THEME_ID', id }) // fix any
