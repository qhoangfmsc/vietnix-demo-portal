import { useEffect, useState } from "react";

interface UseFetchOptions {
  params?: Record<string, any>;
  options?: RequestInit;
}

function buildQuery(params?: Record<string, any>) {
  if (!params) return "";
  const esc = encodeURIComponent;
  return (
    "?" +
    Object.entries(params)
      .map(([k, v]) => `${esc(k)}=${esc(v)}`)
      .join("&")
  );
}

export function useFetch<T = any>(url: string, { params, options }: UseFetchOptions = {}) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    let isMounted = true;
    setLoading(true);
    setError(null);
    setData(null);


    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch(url + buildQuery(params), { ...options, signal: controller.signal });
        if (!res.ok) throw new Error(await res.text());
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (err: any) {
        if (err.name !== "AbortError" && isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, JSON.stringify(params), JSON.stringify(options)]);

  return { data, error, loading };
}
