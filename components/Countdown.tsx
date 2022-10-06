import React, { memo, useEffect } from 'react'
import useMyTimer from 'utils/timeFormatter'

interface Props {
  time_left: string
  setIsExpired?: React.Dispatch<React.SetStateAction<boolean>>
}

const Countdown = memo(({ time_left, setIsExpired }: Props) => {
  const { result, expired } = useMyTimer(time_left!)

  useEffect(() => {
    console.log('expired: ', expired)
    if (typeof setIsExpired === 'function') setIsExpired(expired)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expired])

  if (typeof window === 'undefined') return null
  return <>{result}</>
})
Countdown.displayName = 'Countdown'

export default Countdown
