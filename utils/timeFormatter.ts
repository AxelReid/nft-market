import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import dayjs from 'dayjs'

const useMyTimer = (time: string, onCancel?: () => {}) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: isNaN(Date.parse(time)) ? new Date() : new Date(time),
    onExpire: () => {},
  })
  const [result, setResult] = useState('')
  const [expired, setExpired] = useState(false)

  const handleExpired = useCallback(
    () => setExpired(days < 1 && minutes < 1 && seconds < 1),
    [days, minutes, seconds]
  )
  const handleResult = useCallback(
    () => setResult(timeFormatter(days, hours, minutes, seconds)),
    [days, hours, minutes, seconds]
  )
  useEffect(() => {
    handleResult()
    handleExpired()
  }, [days, hours, minutes, seconds])

  return { result, expired }
}
export default useMyTimer

export const timeFormatter = (d: number, h: number, m: number, s: number) => {
  const format = (n: number, l: string) =>
    n > 0 ? (n > 1 ? `${n}${l}s ` : n + l + ' ') : ''

  return `${format(h + d * 24, 'hr')}${m}:${s > 9 ? s : '0' + s}`
}

export const time_left = (date: Date, time: Date) => {
  const MDY = dayjs(date).format('MM.DD.YYYY')
  const HMS = dayjs(time).format('HH:mm:ss')

  return `${MDY} ${HMS}`
}
