export const queryRecievePosts = (first, offset) => ({
    query: `
    query getPosts($first: Int, $offset: Int) {
        posts(first: $first, offset: $offset) {
            id
            title
            content
            photo
            author {
                id
                name
                email
                photo
            }
        }
    }
`,
    variables: {
        first,
        offset
    }
})
