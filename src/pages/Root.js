import React from "react";
import {useRouter} from "../hooks/useRouter"

export default function Root() {
  const {push} = useRouter();
  return (
    <div>
      <p>root</p>
      {push("/about", "about")}
    </div>
  );
}
