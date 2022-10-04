import { useMemo } from 'react'
import { useTimer } from 'react-timer-hook'

const useMyTimer = (time: string, onCancel?: () => {}) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(time),
    onExpire: () => {},
  })
  const result = useMemo(
    () => timeFormatter(days, hours, minutes, seconds),
    [days, hours, minutes, seconds]
  )
  const expired = useMemo(
    () => days < 1 && minutes < 1 && seconds < 1,
    [days, minutes, seconds]
  )

  return { result, expired }
}
export default useMyTimer

export const timeFormatter = (d: number, h: number, m: number, s: number) => {
  const format = (n: number, l: string) =>
    n > 0 ? (n > 1 ? `${n}${l}s ` : l + ' ') : ''

  return `${format(h + d * 24, 'hr')}${m}:${s > 9 ? s : '0' + s}`
}
