import React from "react";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
import "../../styles/globals.css";
const AlgoliaSearch = () => {
  return (
    <div className="w-full md:w-[22rem]">
      <DocSearch
        appId="GIAYK50IZ2"
        apiKey="ab27356463ffa13e3d75727cd71bfc69"
        indexName="akash"
      />
    </div>
  );
};

export default AlgoliaSearch;
