import { Outlet as RouterOutlet, useNavigation } from "react-router-dom";

export default function Outlet() {
  // const navigation = useNavigation();
  return (
    <div className="p-2">
      <RouterOutlet />
    </div>
  );
}
