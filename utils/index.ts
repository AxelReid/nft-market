export const randomArray = (len: number, cb: (i: number) => any) =>
  Array.from({ length: len }, (_, i) => cb(i))

export const randomNum = (start = 0, end?: number) => {
  const min = end ? start : 0
  const max = end ? end : start

  return Math.floor(Math.random() * (max - min)) + min
}

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
