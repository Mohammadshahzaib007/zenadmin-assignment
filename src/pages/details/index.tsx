import { useParams } from "react-router-dom";

import Container from "../../components/container";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { ChildrenEntity1, ITEM_DETAILS_TYPE, LoadingTypes } from "../../types";

const API = "http://hn.algolia.com/api/v1/items/";

function DetailsPage() {
  const { id } = useParams();

  const [details, setDetails] = useState<ITEM_DETAILS_TYPE>();
  const [busy, setBusy] = useState<LoadingTypes>(null);

  const getDetails = useCallback(async () => {
    setBusy("loading");
    try {
      const response = await fetch(`${API}${id}`);
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const data: ITEM_DETAILS_TYPE = await response.json();
      setDetails(data);
      setBusy("success");
    } catch (error) {
      setBusy("error");
    }
  }, [id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const renderComments = (
    comments: ChildrenEntity1[],
    depth = 0
  ): ReactNode[] => {
    return comments?.map((comment: ChildrenEntity1) => (
      <>
        <div
          key={comment.id}
          className={`flex border ml-[${
            2 + depth * 2
          }px] font-medium rounded px-2.5 py-1.5 cursor-pointer hover:scale-[1.02] transition-all`}
          style={{ marginLeft: `${2 + depth * 20}px` }}
        >
          <p>
            {comment.text} —<strong>{comment.author}</strong>
          </p>
        </div>
        {/* @ts-expect-error 123 */}
        {comment.children && renderComments(comment.children, depth + 1)}
      </>
    ));
  };

  return (
    <Container className="text-[#0E141E]">
      {busy === "loading" ? (
        <h3 className="text-3xl text-center mt-12">Loading... 🔃</h3>
      ) : busy === "error" ? (
        <h3 className="text-3xl text-red-500 text-center mt-12">
          Something went wrong 🤯, Please try again!
        </h3>
      ) : (
        <>
          <h1 className="text-3xl font-semibold mt-8">{details?.title}</h1>
          <p className="text-xl font-semibold mt-4">
            Points: {details?.points}
          </p>

          <h3 className="text-3xl font-semibold mt-8 mb-5">Comments 👇</h3>
          <div className="flex flex-col gap-4">
            {/* @ts-expect-error 123 */}
            {renderComments(details?.children)}
          </div>
        </>
      )}
    </Container>
  );
}

export default DetailsPage;
