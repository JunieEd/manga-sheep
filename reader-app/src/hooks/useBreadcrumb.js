import { useState } from "react";

const useBreadcrumb = () => {
  const [expanded, setExpanded] = useState(false);

  const open = () => setExpanded(true);

  return {
    expanded,
    open,
  };
};

export default useBreadcrumb;
