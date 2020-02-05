export const getAuthorizedId = (state) => {
    return state.auth.id
};
export const getUserData = (state) => {
    return state.profilePage.userData
};
export const getStatus = state => state.profilePage.status;

// сложные реселекторы составлять с помощью createSelector(()=> обычный селектор + операция с ним)
