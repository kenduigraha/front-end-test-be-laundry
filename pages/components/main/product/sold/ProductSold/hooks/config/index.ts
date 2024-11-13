import {
  ProductSoldConfigDataProps,
  useProductReportConfigData,
} from "./src/data";
import { useProductReportConfigOptions } from "./src/options";

export type ProductSoldConfigProps = ProductSoldConfigDataProps;

export function useProductReportConfig(props: ProductSoldConfigProps) {
  return {
    options: useProductReportConfigOptions(),
    data: useProductReportConfigData(props),
  };
}
