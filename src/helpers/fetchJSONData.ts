const fetchJSONData = async (url: string) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (e) {
    return e.message
  }
}

export default fetchJSONData
