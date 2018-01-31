export const mutationCreateUser = (userInput) => ({
    query: `
        mutation createNewUser($input: UserCreateInput!) {
            createUser(input: $input) {
                id
                name
                email
                photo
            }
        }
    `,
    variables: {
        input: userInput
    }
})
