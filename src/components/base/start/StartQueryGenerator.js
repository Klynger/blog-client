export const queryDefaultPosts = (first, offset) => ({
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
