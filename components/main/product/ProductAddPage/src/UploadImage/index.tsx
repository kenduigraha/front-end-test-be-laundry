import { MdOutlineImage } from "react-icons/md";
import { useProductAddPageStore } from "../../store";
import { HARDCODE_LINK_UPLOAD_IMAGE } from "../../../../../utils";

export function UploadImage(props: { className?: string }) {
  // no upload image process, will be set to static CDN link image
  const { setImage } = useProductAddPageStore();

  const className = [
    "flex h-80 w-80 flex-col items-center justify-center rounded-lg bg-white p-6",
    props.className ?? "",
  ].join(" ");

  return (
    <button className={className} onClick={e => setImage(HARDCODE_LINK_UPLOAD_IMAGE)} >
      <MdOutlineImage className="h-full w-full text-[#CAECFF]" />
      <div className="font-bold text-[#3B97CB] underline">
        Upload image here
      </div>
    </button>
  );
}
