import React from "react";
import {useRouter} from "../hooks/useRouter"

export default function Root() {
  const {push} = useRouter();
  return (
    <div>
      <p>root</p>
      {push("/SPA-router/about", "about")}
    </div>
  );
}
