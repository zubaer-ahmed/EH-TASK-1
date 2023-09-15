import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import { useAuth } from "../../Hooks/useAuth";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
export default () => {
  const { user, setUser } = useAuth();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = (chipToDelete) => () => {
    setUser({
      ...user,
      roles: user.roles.filter((chip) => chip != chipToDelete),
    });
  };

  const roles = ["customer", "worker", "admin"];

  async function updateProfile() {
    let res = await (
      await fetch(import.meta.env.VITE_BASE_URL + "/api/users/updateUser", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
    ).json();
    console.log(res);
  }
  return (
    <div className="flex flex-col items-center w-full h-full overflow-auto py-8">
      <div className="text-3xl font-bold my-4">
        {(user?.roles.length > 0 &&
          user.roles[0].replace(/^\w/, (c) => c.toUpperCase())) ||
          "User"}{" "}
        Profile
      </div>
      <div className="px-4 text-gray-600 md:px-8">
        <div className="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-12 h-12 text-gray-400 left-6 top-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
          </svg>
        </div>
        <div className="text-gray-700  mt-4 ">
          <div className="flex flex-col">
            <span className="">
              <a
                href="#"
                className="text-2xl text-indigo-600 hover:text-indigo-500"
              >
                Alex Mask
              </a>
              <div className="flex text-sm items-center">
                <Icon fontSize="inherit">place</Icon>
                <div>{user.country || "USA"}</div>
              </div>
            </span>
          </div>
        </div>
        <div className="mt-8 max-w-lg mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="font-medium">Roles</div>
            <div className="flex space-x-2">
              {(user.roles &&
                user.roles.map((item, index) => (
                  <Chip
                    key={index}
                    label={item}
                    onClick={handleClick}
                    onDelete={handleDelete(item)}
                  />
                ))) || (
                  <Chip
                    label="Default"
                    onClick={handleClick}
                    onDelete={handleDelete(item)}
                  />
                )}
            </div>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Roles</InputLabel>
              <Select
                className="w-full"
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Roles"
                multiple
                renderValue={(selected) => selected.join(", ")}
                value={user.roles}
                onChange={({ target: { value } }) => {
                  if (value)
                    setUser({
                      ...user,
                      roles:
                        typeof value === "string" ? value.split(",") : value,
                    });
                }}
              >
                {roles &&
                  roles.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      <Checkbox defaultChecked={user.roles.indexOf(item) > -1} />
                      {item}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  type="text"
                  placeholder="Alex"
                  value={user.firstName || ""}
                  required
                  onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value });
                  }}
                  className="w-full mt-2 pl-[1.5rem] pr-3 py-2 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  type="text"
                  value={user.lastName || ""}
                  onChange={(e) => {
                    setUser({ ...user, lastName: e.target.value });
                  }}
                  placeholder="Mask"
                  required
                  className="w-full mt-2 pl-[1.5rem] pr-3 py-2 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                placeholder="alex@gmail.com"
                value={user.email || ""}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                required
                className="w-full mt-2 pl-[1.5rem] pr-3 py-2 text-gray-700 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="+1 (555) 000-000"
                  value={user.phone || ""}
                  onChange={(e) => {
                    setUser({ ...user, phone: e.target.value });
                  }}
                  required
                  className="w-full pl-[1.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Password</label>
              <div className="relative mt-2">
                <input
                  type="password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  placeholder="***********"
                  required
                  className="w-full pl-[1.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <button
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              onClick={updateProfile}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
