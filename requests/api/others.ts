import axios from 'axios'

const others = {
  revalidate: (url: string) => axios.post('/api/revalidate', { url }),
}
export default others
