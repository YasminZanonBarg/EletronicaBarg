import { ReactNode } from 'react';
import { ReportChartStyle } from './styles';

interface ReportChartProps {
  title: string;
  children?: ReactNode; // Adicionando explicitamente a propriedade `children`
}

export function ReportChart({ title, children }: ReportChartProps) {
  return (
    <ReportChartStyle>
      <div className="title">{title}</div>
      <div className="content">{children}</div> {/* Renderiza o conteúdo passado */}
    </ReportChartStyle>
  );
}
