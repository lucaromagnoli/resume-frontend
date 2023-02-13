import { fetchProfile } from "./api";
import React, { useEffect, useState } from "react";
import { Section } from "../types/section";

export default function Profile(): JSX.Element {
  let [profile, setProfile] = useState<Section | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchProfile();
      const result: Section = resp.data.results[0];
      setProfile(result);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 >Profile</h2>
        <hr />
      </div>
      <div dangerouslySetInnerHTML={{ __html: profile ? profile.text : "" }} />
    </div>
  );
}
