const baseUrl = 'http://localhost:8080/api/category'

async function getCategories(){
    const res = await fetch(baseUrl,
      {
        method: 'GET'
      })
      console.log(res)
      const data:string = await res.json()
      return data
}

const data = getCategories()
export {data}

export function CategoriesGetter () {
    const data = getCategories()
    return data
}