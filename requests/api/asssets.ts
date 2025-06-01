import init from 'requests/init'
//import { request } from 'requests/request'
import { Asset, AssetDetails } from 'types/data'
import { GetAllParams } from 'types/requests'
import { randomArray, randomNum, shuffleArray } from 'utils'

const NFTs = [
  {
    name: 'HoodBunny',
    image:
      'https://i.pinimg.com/736x/17/67/19/176719b46e64892c3eebc5ba0b42b4f1.jpg',
  },
  {
    name: 'PolarFlex',
    image:
      'https://i.pinimg.com/736x/f5/b0/c6/f5b0c6d60016f3be027e7247d6c08d81.jpg',
  },
  {
    name: 'ChainApe',
    image:
      'https://i.pinimg.com/736x/7b/22/3c/7b223c76a4b5ebfc3b74c38eaea592aa.jpg',
  },
  {
    name: 'ByteWolf',
    image:
      'https://i.pinimg.com/736x/5b/2c/5a/5b2c5ace5a0312e8acb056e37b29a899.jpg',
  },
  {
    name: 'BeanieCats',
    image:
      'https://i.pinimg.com/736x/94/40/f1/9440f155d35c601d39572a932d7eeab3.jpg',
  },
  {
    name: 'StreetWhiskers',
    image:
      'https://i.pinimg.com/736x/38/40/1a/38401a292d54f56088876d09e15066b2.jpg',
  },
  {
    name: 'Lykos',
    image:
      'https://i.pinimg.com/736x/83/7c/51/837c51b04c0e12fa7956823b0c24400e.jpg',
  },
  {
    name: 'ShadowMint',
    image:
      'https://i.pinimg.com/736x/eb/ce/7c/ebce7cceec8ad72be317b6240a572ced.jpg',
  },
  {
    name: 'MetaQuack',
    image:
      'https://i.pinimg.com/736x/e9/46/e1/e946e1dcaf4869e008f241170d5d02a4.jpg',
  },
  {
    name: 'GatorHaus',
    image:
      'https://i.pinimg.com/736x/55/52/dc/5552dc984306353f7ad227a768d2f9fd.jpg',
  },
  {
    name: 'RoarClub',
    image:
      'https://i.pinimg.com/736x/a9/e6/f1/a9e6f1087fd2da8af0104cdf40a2dd55.jpg',
  },
  {
    name: 'LazyDAO',
    image:
      'https://i.pinimg.com/736x/02/84/28/028428ff2f78a1eae01f4fc984414ad3.jpg',
  },
  {
    name: 'DinoDrop',
    image:
      'https://i.pinimg.com/736x/2b/fd/5b/2bfd5bc4f3f35c3c20f43c1d78f46aea.jpg',
  },
  {
    name: 'TallOrder',
    image:
      'https://i.pinimg.com/736x/8f/23/e3/8f23e3e808631bd12a9c5a52c56ee9b5.jpg',
  },
  {
    name: 'FlameBorn',
    image:
      'https://i.pinimg.com/736x/06/df/c3/06dfc315899439bfc86e88f540634829.jpg',
  },
  {
    name: 'LlamaLedger',
    image:
      'https://i.pinimg.com/736x/42/2c/78/422c78377423a5e59594abf88146e170.jpg',
  },
  {
    name: 'RooRiot',
    image:
      'https://i.pinimg.com/736x/e2/b3/cd/e2b3cd4df5940dd84aa21dc680ce6759.jpg',
  },
  {
    name: 'DeerBoss',
    image:
      'https://i.pinimg.com/736x/e1/b2/60/e1b2601fb618ce017d0d1e4fd096fa2c.jpg',
  },
  // -------------------
  {
    name: 'RoostChain',
    image:
      'https://i.pinimg.com/736x/2f/6b/8b/2f6b8bf433e842b834910c6ac6cb518d.jpg',
  },
  {
    name: 'RooPop',
    image:
      'https://i.pinimg.com/736x/0f/fc/2a/0ffc2ab56ff51a2a8d5bbe4774e4372f.jpg',
  },
  {
    name: 'Zebro',
    image:
      'https://i.pinimg.com/736x/1b/3a/31/1b3a312844ded020a5be1b803330e13e.jpg',
  },
  {
    name: 'MeerLedger',
    image:
      'https://i.pinimg.com/736x/78/b5/da/78b5dac61b58d8dd72965fb9b465f6a7.jpg',
  },
  {
    name: 'Spikewear',
    image:
      'https://i.pinimg.com/736x/4e/2a/d1/4e2ad1331c5a66169bd33f1ea52eb672.jpg',
  },
  {
    name: 'BladePengu',
    image:
      'https://i.pinimg.com/736x/5c/96/5c/5c965cf61ef178f8c9ef6cb90a333ba5.jpg',
  },
]

const generate = (slug: string, i = randomNum(NFTs.length)) => {
  const time_left = new Date()
  time_left.setHours(time_left.getHours() + randomNum(2, 24))

  const nft = NFTs[i]

  const base = {
    slug,
    id: Math.random(),
    price: randomNum(7, 300),
    time_left: time_left.toString(),
    name: nft?.name,
    image: nft?.image,
    liked: false,
    likes: 234,
  }

  return {
    asset: (): Asset => {
      return {
        ...base,
        biddings: randomArray(randomNum(10, 50), (i) => ({
          name: `Bidder-${i + 1}`,
          avatar: '',
        })),
      }
    },
    assetDetails: (): AssetDetails => {
      const history = randomArray(randomNum(50), () => ({
        price: randomNum(base.price / 1.5, base.price * 1.5),
        date: '',
      }))

      return {
        ...base,
        description: 'description',
        collection: { name: 'Collector', id: Math.random(), avatar: '' },
        creator: { avatar: '', name: 'Builder' },
        history: {
          data: history,
          total: history.length,
        },
      }
    },
  }
}

const data: Asset[] = Array.from({ length: 24 }, (_, i) =>
  generate(`asset-${i + 1}`, i).asset()
)
shuffleArray(data)

const assets = {
  getOne: async (slug: string): Promise<AssetDetails> =>
    //init.get('/projects/assets/' + slug)
    generate(slug).assetDetails(),

  getAll: async (
    params: GetAllParams
  ): Promise<{ count: number; data: Asset[] }> =>
    //init.get(`/projects/assets/projects/all`, params)
    {
      let result = data

      if (params.page_size) {
        result = result.slice(
          (params.page || 1) - 1,
          params.page_size * (params.page || 1)
        )
      }

      if (params.sort)
        result = result.sort((a, b) => {
          switch (params.sort) {
            case 'asc':
              return a.price - b.price
            case 'desc':
              return b.price - a.price
            case 'popular':
              return b.biddings.length + b.likes - (a.biddings.length + a.likes)
            default:
              return 0
          }
        })

      return {
        data: result,
        count: data.length,
      }
    },

  slugs: async (): Promise<{ slug: string }[]> =>
    //request.get('/projects/item-slug').then((res) => res.data)
    data.map((asset) => ({ slug: asset.slug })),

  create: (data: FormData): any => init.post('/projects/add/', data),
  update: (data: { id: number; time_left: string; price: string }) =>
    init.post('/projects/asset/update', data),
  bid: (id: number, price: number) =>
    init.post('/projects/submit/', { id, price }),
  tinyCards: async (): Promise<
    { slug: string; image: string; price: number }[]
  > =>
    //request.get('/projects/footer-tems')?.then((res) => res.data),
    data.map((asset) => ({
      slug: asset.slug,
      image: asset.image,
      price: asset.price,
    })),
}
export default assets
