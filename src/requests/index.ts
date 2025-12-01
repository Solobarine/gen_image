export default async function imageGenerator(url: string, body: {prompt: string, style: string, color?: string}){
  const response = await fetch(url, {
    body: JSON.stringify(body)
})

return response.json()
}
