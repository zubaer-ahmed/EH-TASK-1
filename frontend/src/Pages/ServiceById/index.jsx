import Icon from "@mui/material/Icon";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

function ServiceById() {
  // Access the "slug" parameter from the URL
  const { slug } = useParams();
  const serviceId = slug;
  const [replyText, setReplyText] = React.useState("");
  const [job, setJob] = React.useState(null);
  const navigate = useNavigate();
  const [globalState, setGlobalState] = useLocalStorage("globalState", {});

  return (
    <div className="flex w-full h-full p-4 overflow-auto items-start">
      <div className="basis-8/12 flex flex-col space-y-4 ">
        <div className="flex flex-col w-full h-full p-4 rounded border shadow">
          <div className="w-full h-full flex flex-col justify-center space-y-1 p-2">
            <h3 className="text-xl font-bold text-blue-600">
              Current Service Title
            </h3>
            <div className="flex items-center text-sm text-gray-500 space-x-1">
              <Icon fontSize="inherit">place</Icon> <div>Service Area</div>
            </div>
            <div className="flex items-center text-sm text-gray-500 space-x-1">
              <Icon fontSize="inherit">access_time</Icon> <div>Open Time</div>
            </div>
            <div className="flex items-center text-sm text-gray-500 space-x-1">
              <Icon fontSize="inherit">reply</Icon>{" "}
              <div>Expected Response Time</div>
            </div>
            <div className="flex items-center text-sm text-gray-500 space-x-1">
              <Icon fontSize="inherit">attach_money</Icon> <div>Cost</div>
            </div>
            <div className="flex space-x-2">
              <div
                className="button p-2"
                onClick={() => {
                  setGlobalState({
                    ...globalState,
                    cart: {
                      items: [
                        globalState.services.find(
                          (item) => item._id == serviceId
                        ),
                      ],
                    },
                  });
                  navigate("/checkout");
                }}
              >
                <Icon fontSize="inherit">shopping_cart</Icon>{" "}
                <div>Order Now</div>
              </div>
              <div className="button p-2 bg-green-500 text-white">
                <Icon fontSize="inherit">phone</Icon> <div>Call Provider</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-4 rounded border shadow">
          <h1 className="text-xl font-bold text-gray-800 ">Description</h1>
          <div className="divider w-full bg-zinc-600/25 h-[1px] my-4"></div>
          <div className="flex flex-col w-full py-2 px-4 border-l-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </p>
          </div>
          <div className="my-4"></div>
          <div className="flex space-x-2">
            <div className="button p-2">
              <Icon fontSize="inherit">question_mark</Icon>{" "}
              <div>Ask a Question</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full p-4 rounded border shadow">
          <div className="flex w-full items-center space-x-2">
            <input
              className="border-2 rounded-lg p-2 w-full"
              name="text"
              id="text"
              rows="3"
              placeholder="Add a comment to this service... "
              onChange={(e) => setReplyText(e.target.value)}
            />
            <div className="material-button">Send</div>
          </div>{" "}
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
              "No comments yet"}
          </div>
        </div>
      </div>

      <div className="basis-4/12 w-full px-4">
        <div className="w-full h-full rounded border shadow p-4">
          <div className="flex items-center ">
            <h1 className="text-xl font-bold text-gray-700">Employer Name</h1>
            <div className="grow"></div>
            <div className="rounded px-1 bg-green-500 text-md text-white mr-1">
              4.6
            </div>
            <div className="flex text-md">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <Icon key={index} fontSize="inherit">
                    star
                  </Icon>
                ))}
            </div>
          </div>
          <div className="divider w-full bg-zinc-600/25 h-[1px] my-6"></div>
          <div className="flex ">
            <img
              src={"/noimage.svg"}
              alt=""
              className="w-28 h-28 object-cover"
            />
            <div className="w-full h-full flex flex-col justify-center space-y-1 p-2">
              <h3 className="text-xl font-bold text-blue-600">
                Service Provider Title
              </h3>
              <div className="flex items-center text-sm text-gray-500 space-x-1">
                <Icon fontSize="inherit">place</Icon>{" "}
                <div>Profile Service Area</div>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-1">
                <Icon fontSize="inherit">access_time</Icon> <div>Hotline</div>
              </div>
              <div className="flex space-x-2">
                <div className="button p-2">Chat</div>
                <div className="button p-2 bg-green-500 text-white">View</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceById;
