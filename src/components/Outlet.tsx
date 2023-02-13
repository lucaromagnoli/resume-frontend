import { Outlet as RouterOutlet } from "react-router-dom";

export default function Outlet(): JSX.Element {
  return (
    <div className="p-2">
      <RouterOutlet />
    </div>
  );
}
