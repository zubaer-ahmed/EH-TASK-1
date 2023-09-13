import { Link, Routes, Route, useNavigate } from "react-router-dom";
import * as React from "react";
import { useParams } from "react-router-dom";

function CommentById() {
  // Access the "slug" parameter from the URL
  const { slug } = useParams();
  const [replyText, setReplyText] = React.useState("");
  const [job, setJob] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchComment();
    return () => {};
  }, []);
  async function fetchComment() {
    const fetchedJob = await (
      await fetch(import.meta.env.VITE_BASE_URL + "/api/job/getJob/" + slug)
    ).json();
    setJob(fetchedJob);
    console.log(fetchedJob);
  }
  return (
    <div className="flex w-full h-full p-4">
      <div className="flex flex-col w-full h-full p-4 rounded border shadow">
        <h1 className="text-xl font-bold text-gray-800 my-2">TITLE</h1>
        <div className="flex flex-col w-full">
          <h1 className="text-sm font-bold text-gray-700">Employer</h1>
          <p>Descrip</p>
        </div>
        <div className="w-full bg-zinc-600/25 h-[1px] my-6"></div>
        <textarea
          className="border-2 rounded-lg p-2 w-full mt-2"
          name="text"
          id="text"
          rows="3"
          placeholder="Reply... "
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <div className="material-button self-start m-2" onClick={sendReply}>
          Send
        </div>
        <div className="w-full bg-zinc-600/25 h-[1px] my-6"></div>
        <h1 className="text-xl font-bold text-gray-800 mt-2">Commnets</h1>
        <div className="flex flex-col py-4 space-y-2">
          {(job?.comments?.length > 0 &&
            job?.comments?.map((reply, index) => (
              <div
                className="flex  p-2 border bg-gray-50 shadow space-x-2 px-2 py-4"
                key={index}
              >
                <img src="/noimage.svg" className="h-8 w-8" alt="Vite logo" />
                <div className="flex flex-col w-full" key={reply._id}>
                  <h1 className="text-sm font-bold text-gray-700">
                    {reply?.senderId?.email}
                  </h1>
                  <p className="text-gray-700">{reply?.text}</p>
                  <div className="text-xs mt-2 text-blue-500 ">
                    <a href="#" className="underline">
                      Like
                    </a>{" "}
                    <a href="#" className="underline">
                      Reply
                    </a>{" "}
                    <a href="#" className="underline">
                      Edit
                    </a>{" "}
                    <a href="#" className="underline">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            ))) ||
            "No replies yet"}
        </div>
      </div>
    </div>
  );
}

export default CommentById;
