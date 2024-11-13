import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

import TextArea from "../../../common/TextArea";
import TextField from "../../../common/TextField";
import MiniTextField from "../../../common/TextField/mini";
import { Category } from "./src/category";
import { UploadImage } from "./src/UploadImage";
import { useProductAddPageStore } from "./store";

function Headline(props: { children?: ReactNode }) {
  return (
    <div className="w-full text-4xl font-bold text-[#303030]">
      {props.children}
    </div>
  );
}

export default function ProductAddPage() {
  const {
    publish,
    setName,
    setDescription,
    setSKU,
    setStock,
    setPrice,
  } = useProductAddPageStore();

  const name = useProductAddPageStore((state) => state.name);
  const description = useProductAddPageStore((state) => state.description);
  const sku = useProductAddPageStore((state) => state.sku);
  const stock = useProductAddPageStore((state) => state.stock);
  const price = useProductAddPageStore((state) => state.price);

  return (
    <div className="relative h-full w-full overflow-auto">
      <div
        className="absolute flex w-full flex-row items-stretch justify-start bg-[#E7F5FD]"
        style={{
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <div className="flex w-full flex-col items-center gap-6 p-6">
          <Headline>Add New Product</Headline>
          <TextField label="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
          <TextArea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <div className="flex w-full flex-row gap-6">
            <MiniTextField label="SKU" value={sku} onChange={(e) => setSKU(e.target.value)} />
            <MiniTextField label="Stock" value={stock.toString()} onChange={(e) => setStock(e.target.value)} />
          </div>
          <Category />
          <div className="flex w-full flex-col gap-3">
            <div className="text-xl font-normal text-blue-500">Price</div>
            <div className="flex w-full flex-row items-center gap-6">
              <input
                type="number"
                className="h-[60px] w-[237px] rounded-[10px] border border-blue-500 bg-white px-3 text-black"
                onChange={(e) => setPrice(Number(e.target.value))}
                value={price}
              />
              <div className="flex flex-grow"></div>
              <Button
                className={`hidden bg-[#56E4A0] px-12 text-white shadow-none xl:flex`}
                style={{ textTransform: "none" }}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={publish}
              >
                Publish
              </Button>
            </div>
          </div>
          <UploadImage className="xl:hidden" />
          <Button
            className={`flex w-full flex-row items-center justify-center bg-[#56E4A0] px-12 text-white shadow-none xl:hidden`}
            style={{ textTransform: "none" }}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onClick={publish}
          >
            Publish
          </Button>
        </div>
        <div className="hidden w-64 flex-none flex-col items-center justify-start bg-[#F5FCFF] py-8 xl:flex">
          <UploadImage className="max-h-48 max-w-[192px]" />
        </div>
      </div>
    </div>
  );
}
