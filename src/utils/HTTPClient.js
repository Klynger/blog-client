import { domain } from './DomainConstants'

const envDomain = domain[process.env.NODE_ENV]

const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
}

export const request = body => fetch(envDomain, {
    headers,
    method: 'POST',
    body: JSON.stringify(body)
})
.then(response => response.json())
.catch(error => error)