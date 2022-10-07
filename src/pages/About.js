import React from "react";
import {useRouter} from "../hooks/useRouter"

export default function About() {
  const {push} = useRouter();
  return (
    <div>
      <p>about</p>
      {push("/", "go main")}
    </div>
  );
}
