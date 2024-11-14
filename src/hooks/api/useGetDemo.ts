import DemoService, {
  RequestDemo,
  ResponseDataDemo,
} from "@/services/demo/Demo.service";
import { useEffect, useState } from "react";

const useGetListDestination = (filters: RequestDemo) => {
  const [data, setData] = useState<ResponseDataDemo>();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const res = await DemoService.get(filters);
      setData(res.data);
    } catch {
      //
    } finally {
    }
  };

  return {
    data,
  };
};

export default useGetListDestination;
