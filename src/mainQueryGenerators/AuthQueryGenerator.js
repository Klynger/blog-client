export const mutationCreateToken = (email, password) => ({
    query: `
        mutation createNewToken($email: String!, $password: String!) {
            createToken(email: $email, password: $password) {
                token
            }
        }
    `,
    variables: {
        email,
        password
    }
})
