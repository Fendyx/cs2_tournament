import "./i18n";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Content } from "./modules/Content";

createRoot(document.getElementById('root') as Element)
  .render(
    <StrictMode>
      <Content />
    </StrictMode>,
  );
