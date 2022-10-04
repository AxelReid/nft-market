import { ScrollArea, useMantineColorScheme } from '@mantine/core'
import dynamic from 'next/dynamic'
import React from 'react'
import { AssetHistory } from 'types/data'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => null,
})

interface Props {
  history: AssetHistory[] | undefined
}

const LineChartHistory = ({ history }: Props) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const lineCl = '#76DECC'
  const cl2 = '#7780A1'
  const bCl = dark ? '#262840' : '#E2E2ED'

  const data = history?.map((val) => val.price) || []
  const categories = history?.map((val) =>
    new Date(val.date).toLocaleTimeString()
  )

  const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
    {
      name: 'ETH',
      data,
      color: lineCl,
    },
  ]
  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
      foreColor: cl2,
      fontFamily: 'Sora, sans-serif',
      parentHeightOffset: 0,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      lineCap: 'round',
    },
    tooltip: {
      theme: colorScheme,
      style: {
        fontSize: '15px',
      },
      marker: {
        show: false,
      },
      x: { show: false },
    },
    xaxis: {
      type: 'category',
      categories,
      tooltip: { enabled: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { offsetY: 3, style: { fontSize: '12px' } },
    },
    yaxis: {
      show: false,
    },
    grid: {
      borderColor: bCl,
      strokeDashArray: 6,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
  }
  return (
    <ScrollArea
      offsetScrollbars
      scrollbarSize={4}
      type="always"
      sx={{ height: 220 }}
    >
      <div style={{ minWidth: 400 }}>
        <Chart options={options} series={series} type="line" height={200} />
      </div>
    </ScrollArea>
  )
}

export default LineChartHistory
