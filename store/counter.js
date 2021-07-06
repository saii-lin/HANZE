export const state = () => ({
    number: 0
})
export const mutations = {
    changeNumber(state, newNumber) {
        state.number = newNumber

    }

}
export const getters = {
    newNumber(state) {
        return state.number
    }
}