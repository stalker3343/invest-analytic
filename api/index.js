export class Api {
  baseUrl = ''
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  post = ($axios, name, payload, headers) => {
    // console.log('api post', $axios, name, payload, headers)

    return $axios
      .$post(`${this.baseUrl}/${name}`, payload, { headers })
      .then((res) => res)
  }

  get = ($axios, name, payload, headers) => {
    // console.log('api get', $axios, name, payload)
    return $axios
      .$get(`${this.baseUrl}/${name}`, {
        params: payload,
        headers,
      })
      .then((res) => res)
      .catch(console.log)
  }
}
