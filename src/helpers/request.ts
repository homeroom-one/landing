import { GraphQLClient } from 'graphql-request'

const endpoint = import.meta.env.VITE_HYGRAPH_ENDPOINT_CONTENT_API
const token = import.meta.env.VITE_HYGRAPH_LOCAL_API_TOKEN

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`
  }
})

export const clientQuery = async (query: string) => {
  try {
    return await client.request(query)
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2))
    // process.exit(1)
  }
}

export const clientMutation = async (query: string, variables: any) => {
  try {
    return await client.request(query, variables)
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2))
    // process.exit(1)
  }
}
