import moment from "moment";

import { News } from "../../types";
import Tag from "../tag";

interface PropTypes extends News {
  onClick: (id: string) => void;
}

function Card(props: PropTypes) {
  const { title, author, createdAt, updatedAt, tags, onClick, id } = props;
  return (
    <div
      onClick={() => onClick(id)}
      className="w-full p-4 shadow-md rounded border cursor-pointer text-[#0E141E]"
    >
      <div className="w-full flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg capitalize font-medium">Author {author}</p>
      </div>
      <div className="w-full flex justify-between items-end text-sm font-medium">
        <div>
          <p>Created at {moment(createdAt).subtract(10, "days").calendar()}</p>
          <p>Updated at {moment(updatedAt).subtract(10, "days").calendar()}</p>
        </div>

        <div className="flex gap-1">
          {tags.map((t, i) => (
            <Tag key={i} title={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
