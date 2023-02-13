import { fetchHome } from "./api";
import React, { useEffect, useState } from "react";
import { Section } from "../types/section";

function getLinks(links: string[]) {
  return links.map((link) => {
    return (
      <div>
        <a href={link}>{link}</a>
      </div>
    );
  });
}
export default function Home() {
  let [home, setHome] = useState<Section | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchHome();
      const result: Section = resp.data.results[0];
      setHome(result);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2>Home</h2>
        <hr />
      </div>
      <div dangerouslySetInnerHTML={{ __html: home ? home.text : "" }} />
      <div>{getLinks(home ? home.links : [])}</div>
    </div>
  );
}
