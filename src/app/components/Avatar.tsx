import info from "../../../mis-links.json";
const {image} = info.basics;
export default function Avatar(){
  return (
    <div>
      <img src={image} alt="avatar" className="mb-2 rounded-full size-36"/>
    </div>
  );
}