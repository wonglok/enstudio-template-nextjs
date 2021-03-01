import { useEffect, useRef } from "react";
import { main } from "./core";

export default function Page() {
  const ref = useRef();
  useEffect(() => {
    main({ mounter: ref.current, pageAt: window.location.pathname });
  }, []);
  return <div className="h-full" ref={ref}></div>;
}
