import fetchJSONData from '../fetchJSONData'

describe('fetchJSONData', () => {
  test('should return error message', () => {
    fetchJSONData('').then((data) => {
      expect(typeof data).toBe('string')
    })
  })
})
