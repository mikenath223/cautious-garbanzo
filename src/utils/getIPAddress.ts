const fetchIPAddress = async () => {
  try {
    const response = await fetch('https://ipapi.co/json')
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export default fetchIPAddress
