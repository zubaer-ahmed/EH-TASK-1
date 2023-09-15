import * as React from "react";
import { Link, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import { useAuth } from "../../Hooks/useAuth";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import SideBar from "../../Components/SideBar";

import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PaymentGatewayForm from "../../Components/PaymentGatewayForm";
export default () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [sortType, setSortType] = React.useState("");
  const [sortTypes, setSortTypes] = React.useState([
    "Name Ascending",
    "Name Descending",
    "Price Ascending",
    "Price Descending",
  ]);
  const [limit, setLimit] = React.useState(10);
  const [limits, setLimits] = React.useState([5, 10, 20, 50]);
  const { user, setUser } = useAuth();
  const [globalState, setGlobalState] = useLocalStorage("globalState", {});

  return (
    <section className="flex flex-col w-full h-full">
      <div className="flex w-full grow items-stretch p-4 flex-wrap sm:flex-nowrap">
        <div className="flex flex-col basis-8/12 grow w-full h-full rounded-xl p-4  space-y-4 ">
          <div className="flex flex-col border p-4">
            <div>{globalState.cart?.items[0].title}</div>
            <div>{user.firstName + " " + user.lastName}</div>
            <div>{user.billingAddress}</div>
            <div className="flex space-x-2">
              <Link to="/settings" className="text-blue-700">
                Edit Billing Address
              </Link>
              <Link to="/settings" className="text-blue-700">
                Edit Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col border p-4">
            <div className="text-xl font-bold">Products Ordered</div>
            <div className="divider w-full bg-zinc-600/25 h-[1px] my-6"></div>
            <table>
              {[...globalState.cart?.items, ...globalState.cart?.items].map(
                (item, index) => {
                  return (
                    <tr className=" border-b">
                      <td className="flex flex-col">
                        <div>{item.title}</div>
                        <div className="text-sm">
                          Provider:{" "}
                          {item.worker.firstName + " " + item.worker.lastName}
                        </div>
                      </td>
                      <td>Quantity : 1</td>
                    </tr>
                  );
                }
              )}
            </table>
          </div>
          <div className="py-4"></div>
          <div className="flex flex-col w-full">
            <PaymentGatewayForm />
          </div>
        </div>
        <div className="flex flex-col basis-4/12 p-4 grow">
          <div className="flex flex-col rounded p-4 border w-full bg-white ">
            {/* .25 * 18 = 4.5 */} {/* top-18 */}
            <div className="font-bold">Checkout</div>
            <div className="my-2"></div>
            <div className="">Amount: {globalState.cart?.items.length}</div>
            <div className="">
              Total Price:{" "}
              {
                (globalState.cart?.items.reduce(
                  (accumulator, currentValue) => {
                    return { cost: accumulator.cost + currentValue.cost };
                  },
                  { cost: 0 }
                )).cost
              }
            </div>
            <div className="">Delivery Charge: 15</div>
            <div className="my-2"></div>
            <div className="button bg-green-500 text-white p-2">Checkout</div>
          </div>
          <div className="my-2"></div>
          <div className="flex flex-col space-y-4"></div>
        </div>
      </div>
    </section>
  );
};