import React from "react";
import userData from "@constants/data";

export default function Blog(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.


  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}