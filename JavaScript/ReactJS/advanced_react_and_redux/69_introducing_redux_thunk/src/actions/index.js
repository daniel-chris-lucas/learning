

export function signinUser({ email, password }) {
    return function (dispatch) {
        // Submit email/password to the server

        // If request is good...
        // - Update state to indicate user is authenticated
        // - Save the JWT token
        // -redirect to the route '/feature'

        // If request is bad...
        // - Show an error the the user
    }
}
