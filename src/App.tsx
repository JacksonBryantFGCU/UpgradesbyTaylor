import { Outlet } from "react-router-dom";
import { SiteLayout } from "@/layouts/SiteLayout";
import { useScrollToHash } from "@/hooks/useScrollToHash";

export default function App() {
  useScrollToHash();

  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
