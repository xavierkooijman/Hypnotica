import { defineStore } from 'pinia';
import { getSpotifyAccessToken, searchArtist, fetchTopTracks } from '../api/spotify';  // Importando as funções da API

export const useArtistsStore = defineStore('artists', {
  state: () => ({
    artists: [
      {
        id: "1",  // ID do artista
        name: "Charlotte de Witte",  // Nome do artista
        bio: "Charlotte de Witte is a globally renowned DJ and producer hailing from Belgium, celebrated for her dark, powerful, and hypnotic approach to techno. Rising to fame in the mid-2010s, she quickly established herself as one of the most influential figures in the electronic music scene. Known for her relentless energy behind the decks, Charlotte has become a headliner at major festivals such as Tomorrowland, Awakenings, and Ultra Music Festival.",
        simpleDescription: "Charlotte de Witte is a globally renowned DJ and producer hailing from Belgium",
        mainImg: "https://xlr8r.com/wp-content/uploads/2019/06/screen-shot-2018-02-15-at-95724-am.png",  // URL da imagem principal
        secondaryImg: "https://images.xceed.me/artists/covers/charlotte-de-witte-artist-xceed-cover-7ebc.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@charlottedewittemusic",
          spotify: "https://open.spotify.com/intl-pt/artist/1lJhME1ZpzsEa5M0wW6Mso?si=aD3d2UhkREubmruGyM_Qlw",
          instagram: "https://www.instagram.com/charlottedewittemusic"
        }
      },

      {
        id: "2",  // ID do artista
        name: "Amelie Lens",  // Nome do artista
        bio: "Amelie Lens is a Belgian DJ, record producer, and owner of the Lenske label. Known for her relentless, fast-paced techno sets, she has quickly become one of the most sought-after names in the electronic music industry, headlining festivals like Awakenings and Time Warp.",
        simpleDescription: "Amelie Lens is a Belgian DJ and producer celebrated for her fast-paced techno sets.",
        mainImg: "https://cdn.prod.website-files.com/661bd3fd7a14900ef37eb2d9/66baa967f40f19b6ff16525f_amelie-lens-1.webp",  // URL da imagem principal
        secondaryImg: "https://cache.dpg.media/crrsfakvptom/images/fc3fef54-e9b6-11ec-a956-12a570288d0d/amelie_lens_xeeqx_website_image_sghd_standard.jpg?20220611194800",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@amelielens",
          spotify: "https://open.spotify.com/artist/4gJCFoKkR2B4ddncOfy2Jg",
          instagram: "https://www.instagram.com/amelielens"
        }
      },

      {
        id: "3",  // ID do artista
        name: "Adam Beyer",  // Nome do artista
        bio: "Adam Beyer is a Swedish techno DJ and producer, and the founder of the Drumcode label. With a career spanning over two decades, Beyer has been a key figure in shaping the global techno scene.",
        simpleDescription: "Adam Beyer is a Swedish techno DJ and founder of Drumcode.",
        mainImg: "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/05/17210318/8d1462aa-6d30-11ee-b991-0ee6b8365494-972x597.jpg",  // URL da imagem principal
        secondaryImg: "https://i.scdn.co/image/ab6761610000e5eb5af01ec674f7a7c61d22c527",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@drumcode",
          spotify: "https://open.spotify.com/artist/7MGSdVsUUnCkoTfJpAPn9m",
          instagram: "https://www.instagram.com/realadambeyer"
        }
      },

      {
        id: "4",  // ID do artista
        name: "Richie Hawtin",  // Nome do artista
        bio: "Richie Hawtin, also known as Plastikman, is a Canadian-British DJ, producer, and techno pioneer. With a focus on minimal techno and innovative live performances, he is considered one of the genre's most influential figures.",
        simpleDescription: "Richie Hawtin is a Canadian-British DJ and pioneer in minimal techno.",
        mainImg: "https://sonarlisboa.pt/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpro-lisboa-cms-bucket%2FS2025_LIS_Artists_Ficha_Web_Richie_Hawtin_c9e5b15c8a%2FS2025_LIS_Artists_Ficha_Web_Richie_Hawtin_c9e5b15c8a.png&w=3840&q=75",  // URL da imagem principal
        secondaryImg: "https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL3NxdWFyZS9yaWNoaWVoYXd0aW4uanBnP2RhdGVVcGRhdGVkPTE3MjYxNTcwMDIwMDA=",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@richiehawtin",
          spotify: "https://open.spotify.com/artist/1Trt1zr3yqZzwfVXBPMrUC",
          instagram: "https://www.instagram.com/richiehawtin"
        }
      },

      {
        id: "5",  // ID do artista
        name: "Carl Cox",  // Nome do artista
        bio: "Carl Cox is a British DJ, producer, and one of the most iconic figures in techno and house music. With decades of experience, he has headlined the world's largest festivals and hosted legendary residencies.",
        simpleDescription: "Carl Cox is a British DJ and iconic figure in techno and house music.",
        mainImg: "https://prodj.pt/wp-content/w3-webp/uploads/2024/08/Carl-Cox.jpgw3.webp",  // URL da imagem principal
        secondaryImg: "https://i.guim.co.uk/img/media/cee3639f3c638a222e7dceb749e79a5b16b93183/0_550_8256_4954/master/8256.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=64d1ed16f83e08ef2ab9fdb2c0354da3",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@carlcoxofficial",
          spotify: "https://open.spotify.com/artist/4XwM0hpEN2P06lX4Kehs6e",
          instagram: "https://www.instagram.com/carlcoxofficial"
        }
      },

      {
        id: "6",  // ID do artista
        name: "Nina Kraviz",  // Nome do artista
        bio: "Nina Kraviz is a Russian DJ, producer, and vocalist known for her unique style that blends techno, house, and acid music. She has performed at major festivals worldwide and is celebrated for her artistic vision.",
        simpleDescription: "Nina Kraviz is a Russian DJ and producer blending techno, house, and acid.",
        mainImg: "https://media.npr.org/assets/img/2016/11/28/ninakravizcamilleblake_wide-b173dbcea5c939385b242f828062f6e38acc339a.jpeg",  // URL da imagem principal
        secondaryImg: "https://i.scdn.co/image/ab6761610000e5eb02788d99e5636308304d2eec",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@ninakraviz",
          spotify: "https://open.spotify.com/artist/6t0qYXWBXX7Sl7I5wI8oEg",
          instagram: "https://www.instagram.com/ninakraviz"
        }
      },

      {
        id: "7",  // ID do artista
        name: "Ben Klock",  // Nome do artista
        bio: "Ben Klock is a German techno DJ, producer, and resident of the iconic Berghain club in Berlin. Known for his hypnotic sets, he has been a leading name in the global techno scene for years.",
        simpleDescription: "Ben Klock is a German DJ and Berghain resident renowned for hypnotic techno sets.",
        mainImg: "https://res.cloudinary.com/shotgun/image/upload/c_limit,w_3840/fl_lossy/f_auto/q_auto/production/artworks/0810_BenKlock_mzzxmv.jpg",  // URL da imagem principal
        secondaryImg: "https://fastly-s3.allmusic.com/artist/mn0000279288/400/dGHPmmzyXFZYR8Z94L8vyypQg_7iAU1wjqLgK_xGXts=.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@benklock",
          spotify: "https://open.spotify.com/artist/4Fnf4VxmWrmVpxrYztuCRu",
          instagram: "https://www.instagram.com/benklock"
        }
      },

      {
        id: "8",  // ID do artista
        name: "Jeff Mills",  // Nome do artista
        bio: "Jeff Mills is an American DJ, producer, and founding member of Underground Resistance. Known as The Wizard, he has been a key figure in Detroit techno and electronic music innovation.",
        simpleDescription: "Jeff Mills is a Detroit techno pioneer and member of Underground Resistance.",
        mainImg: "https://static.ra.co/images/profiles/lg/jeffmills.jpg?dateUpdated=1616415199940",  // URL da imagem principal
        secondaryImg: "https://borshchmagazine.com/wp-content/uploads/2019/07/jeffmills_borshch_06.jpg",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@jeffmills",
          spotify: "https://open.spotify.com/artist/3iGBc3O4UQ8qjKKH1c8PZn",
          instagram: "https://www.instagram.com/jeffmillsofficial"
        }
      },

      {
        id: "9",  // ID do artista
        name: "Tale of Us",  // Nome do artista
        bio: "Tale of Us is an Italian DJ and production duo known for their emotive and cinematic techno sound. They have become a staple at major festivals and launched their Afterlife label and event series.",
        simpleDescription: "Tale of Us is an Italian duo known for cinematic techno and Afterlife events.",
        mainImg: "https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/article/image/1V9A3718_3.JPG.webp?itok=9tMXsHL9",  // URL da imagem principal
        secondaryImg: "https://i.scdn.co/image/ab6761610000e5eb20b1eaa29f8a64a42bca1dce",  // URL da imagem secundária
        socials: {  // Redes sociais
          youtube: "https://youtube.com/@taleofus",
          spotify: "https://open.spotify.com/artist/5LhTec3c7dcqBvpLRWbMcf",
          instagram: "https://www.instagram.com/taleofus"
        }
      }
    ],
    accessToken: "",  // Armazenar o token de acesso aqui
  }),

  getters: {
    // Retorna um artista pelo ID
    getArtistById: (state) => (id) => {
      return state.artists.find(artist => artist.id == id);
    }
  },

  actions: {
    // Função para obter o token de acesso do Spotify
    async getSpotifyAccessToken() {
      const clientId = "84741557514b4c5d9f24d8e4fef08a61";
      const clientSecret = "a8c37f627ee04bdf8d92a25ccd73d34a";
      try {
        const data = await getSpotifyAccessToken(clientId, clientSecret);
        if (data.access_token) {
          this.accessToken = data.access_token;
        }
      } catch (error) {
        console.error("Error fetching Spotify access token:", error);
        throw error;
      }
    },

    // Função para obter o ID do artista
    async getArtistId(artistName) {
      if (!this.accessToken) {
        await this.getSpotifyAccessToken();
      }

      try {
        const data = await searchArtist("https://api.spotify.com/v1", this.accessToken, artistName);
        if (data.artists.items.length === 0) {
          throw new Error(`No artist found with name: ${artistName}`);
        }
        return data.artists.items[0].id;
      } catch (error) {
        console.error("Error fetching artist ID:", error);
        throw error;
      }
    },

    // Função para obter as faixas mais populares de um artista
    async getTopTracks(artistId) {
      if (!this.accessToken) {
        await this.getSpotifyAccessToken();
      }

      try {
        const data = await fetchTopTracks("https://api.spotify.com/v1", this.accessToken, artistId);
        return data.tracks.slice(0, 3).map((track) => ({
          name: track.name,
          album: track.album.name,
          preview_url: track.preview_url,
          popularity: track.popularity,
          image_url: track.album.images[0].url, // Adiciona a imagem do álbum
          id: track.id, // Adiciona o id da faixa
        }));
      } catch (error) {
        console.error("Error fetching top tracks:", error);
        throw error;
      }
    },

    // Função para obter as 3 faixas mais populares de um artista
    async getTop3Tracks(artistName) {
      try {
        const artistId = await this.getArtistId(artistName);
        const topTracks = await this.getTopTracks(artistId);
        return topTracks;
      } catch (error) {
        console.error(`Error fetching top 3 tracks for artist ${artistName}:`, error);
        throw error;
      }
    },

    // Adiciona um novo artista
    addArtist(name, bio, images, youtube, spotify, instagram) {
      const artistExists = this.artists.some(artist => artist.name === name);

      if (artistExists) {
        throw new Error('Já existe um artista com esse nome');
      }

      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1;
      } while (this.artists.some(artist => artist.id === newId));


      const newArtist = {
        id: newId,
        name: name,
        bio: bio, 
        mainImg: images[0],
        secondaryImg: images[1],
        socials: {
          youtube: youtube,
          spotify: spotify,
          instagram: instagram
        }
      };

      this.artists.push(newArtist);
    },

    // Remove um artista pelo ID
    removeArtist(id) {
      const artistIndex = this.artists.findIndex(artist => artist.id === id);

      if (artistIndex === -1) {
        throw new Error('Artista não encontrado');
      }

      this.artists.splice(artistIndex, 1);
    },

    // Atualiza informações de um artista específico
    updateArtist(updatedArtist) {
      const artistIndex = this.artists.findIndex(artist => artist.id === updatedArtist.id);

      if (artistIndex === -1) {
        throw new Error('Artista não encontrado');
      }

      this.artists[artistIndex] = { 
        ...this.artists[artistIndex], 
        ...updatedArtist,
        socials: {  // Mescla apenas o objeto de redes sociais separadamente
          ...this.artists[artistIndex].socials,
          ...updatedArtist.socials
        }
      };
    }
  },
  persist: true,
});
