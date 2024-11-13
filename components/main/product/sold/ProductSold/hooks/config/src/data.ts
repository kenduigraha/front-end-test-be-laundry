import { ChartData } from "chart.js";

import { ProductReportChartType } from "../../..";
import { ProductReportQuery } from "../../query";

export type ProductSoldConfigDataProps = {
  entries: ProductReportQuery;
};

export function useProductReportConfigData(
  props: ProductSoldConfigDataProps,
): ChartData<ProductReportChartType> {
  return {
    labels: props.entries.map((data) => data.created_at),
    datasets: [
      {
        data: props.entries.map((data) => data.total),
        backgroundColor: "#B2C5D4",
        borderRadius: 4,
        borderSkipped: false,
        borderWidth: 0,
        hoverBackgroundColor: "#3E7DAB",
        hoverBorderWidth: 0,
      },
    ],
  };
}
