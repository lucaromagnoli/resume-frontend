import { Outlet as RouterOutlet } from "react-router-dom";

export default function Outlet() {
  return (
    <div className="p-2">
      <RouterOutlet />
    </div>
  );
}
