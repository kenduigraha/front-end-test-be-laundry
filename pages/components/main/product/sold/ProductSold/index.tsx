import { Button, Spinner } from "@material-tailwind/react";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

import { useProductReportConfig } from "./hooks/config";
import { useProductReportQuery } from "./hooks/query";

export type ProductReportChartType = "bar";

export type ProductSoldProps = {
  className?: string;
};

export default function ProductSold(props: ProductSoldProps) {
  const query = useProductReportQuery();

  const className = [props.className ?? "", "relative w-full"].join(" ");

  const { options, data } = useProductReportConfig({
    entries: query.data ?? [],
  });

  const isLoading = [
    query.isInitialLoading,
    query.isLoading,
    query.isFetching,
    query.isRefetching,
  ].reduce((a, b) => {
    return a || b;
  });

  if (isLoading) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (query.error) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <pre className="text-center font-sans text-black">{`${query.error}`}</pre>
        <Button
          onClick={() => {
            console.log('try again')
            query.refetch();
          }}
        >
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <Bar
      {...{
        className,
        options,
        data,
      }}
    />
  );
}
