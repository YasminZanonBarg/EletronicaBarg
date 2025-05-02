import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Rectangle
} from 'recharts'

type OrdersPerDayChartProps = {
  data: { dataEntrada: string; quantidade: number }[]
}

export function OrdersPerDayChart({ data }: OrdersPerDayChartProps) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={data}
        margin={{ top: 50, right: 15, bottom: 0, left: 0 }} // Ajuste de margem
      >
        <CartesianGrid strokeDasharray="2 2" stroke="#e0e0e0" />
        <XAxis
          dataKey="dataEntrada"
          fontSize={14}
          tickMargin={5}
          angle={0}
          height={30}
          tickFormatter={(value: string) => {
            const date = new Date(value)
            return date.getDate().toString().padStart(2, '0')
          }}
          tick={{ fontSize: 14, fontWeight: 'normal' }}
        />
        <YAxis
          domain={[0, 'dataMax + 1']}
          axisLine={false} 
          tickLine={false} 
          tick={false} 
          width={0}
        />
        <Tooltip
          wrapperStyle={{ fontSize: '14px', fontWeight: 'normal' }}
          contentStyle={{ padding: 5 }}
          labelStyle={{ fontSize: '14px', fontWeight: 'normal' }}
          itemStyle={{ fontSize: '14px', fontWeight: 'normal' }}
        />
        <Bar
          dataKey="quantidade"
          fill="#C4D6BA"
          barSize={20}
          label={{ position: 'top', fontSize: 14, fill: '#333', fontWeight: 'normal' }}
          activeBar={<Rectangle fill="white" stroke="green" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
