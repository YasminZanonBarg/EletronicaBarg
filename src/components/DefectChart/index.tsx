import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts'

const COLORS = ['#F1D8B3', '#F4EDC7', '#A1B48F', '#86AEB0', '#928FB7', '#B798AE']

type Props = {
  data: { defeito: string; quantidade: number }[]
}

export function DefectChart({ data }: Props) {
  const formattedData = data.map((entry) => ({
    name: entry.defeito,
    pv: entry.quantidade,
  }))

  return (
    <ResponsiveContainer width="100%" height={220}>
      <ComposedChart
        layout="vertical"
        data={formattedData}
        margin={{ top: 50, right: 15, bottom: 0, left: 0 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          type="number"
          domain={[0, 'dataMax + 2']}
          tick={{ fontSize: 14, fontWeight: 'normal' }}
        />
        <YAxis
          dataKey="name"
          type="category"
          scale="band"
          tick={{ fontSize: 14, fontWeight: 'normal', textAnchor: 'start'}}
          dx={-90}  
          width={100} 
        />
        <Tooltip
          contentStyle={{
            fontSize: '14px', 
          }}
        />
        <Bar dataKey="pv" barSize={14}>
          <LabelList dataKey="pv" position="right" style={{ fontSize: 12 }} />
          {formattedData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  )
}
