import { useEffect, useState } from "react";
import axios from "axios";

const metadata_url = "/webxdiviewer/xdidata/db.json";

import { XASStandard } from "../models";

function useMetadata(): XASStandard[] {
  const [appMetadata, setAppMetdata] = useState<XASStandard[]>([]);

  useEffect(() => {
    axios.get(metadata_url).then((res) => {
      setAppMetdata(res.data);
    });
  }, []);

  return appMetadata;
}

export default useMetadata;
