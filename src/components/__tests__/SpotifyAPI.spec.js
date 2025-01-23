import { describe, it, expect, vi } from 'vitest'
import { getSpotifyAccessToken, searchArtist, fetchTopTracks } from '../../api/spotify'

describe('Spotify API', () => {
  const mockToken = 'mock-token-123'
  const mockArtistId = '123456'
  const mockArtistName = 'Test Artist'

  beforeEach(() => {
    global.fetch = vi.fn()
  })

  it('gets spotify access token', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ access_token: mockToken })
    })

    const token = await getSpotifyAccessToken('client-id', 'client-secret')
    expect(token.access_token).toBe(mockToken)
  })

  it('searches for an artist', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        artists: {
          items: [{
            id: mockArtistId,
            name: mockArtistName
          }]
        }
      })
    })

    const result = await searchArtist('https://api.spotify.com/v1', mockToken, mockArtistName)
    expect(result.artists.items[0].id).toBe(mockArtistId)
  })

  it('fetches top tracks for artist', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        tracks: [{
          id: '1',
          name: 'Track 1',
          album: {
            name: 'Album 1',
            images: [{ url: 'image1.jpg' }]
          },
          preview_url: 'preview1.mp3',
          popularity: 80
        }]
      })
    })

    const tracks = await fetchTopTracks('https://api.spotify.com/v1', mockToken, mockArtistId)
    expect(tracks.tracks[0].name).toBe('Track 1')
  })

  it('handles API errors', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
      text: () => Promise.resolve('Unauthorized')
    })

    await expect(
      searchArtist('https://api.spotify.com/v1', 'invalid-token', mockArtistName)
    ).rejects.toThrow('API request failed')
  })
})