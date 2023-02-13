import { fetchProfile } from "./api";
import React, { useEffect, useState } from "react";
import { Section } from "../types/section";

export default function Profile() {
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
      <div dangerouslySetInnerHTML={{ __html: profile ? profile.text : "" }} />
    </div>
  );
}
