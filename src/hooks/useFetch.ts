import { useEffect, useState, useMemo } from "react";

interface UseFetchOptions {
  params?: Record<string, string | number | boolean | undefined | null>;
  options?: RequestInit;
}

function buildQuery(params?: Record<string, string | number | boolean | undefined | null>) {
  if (!params) return "";
  const esc = encodeURIComponent;
  return (
    "?" +
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `${esc(key)}=${esc(value as string | number | boolean)}`)
      .join("&")
  );
}

export function useFetch<T = unknown>(url: string, { params, options }: UseFetchOptions = {}) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const paramsString = useMemo(() => JSON.stringify(params), [params]);
  const optionsString = useMemo(() => JSON.stringify(options), [options]);

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
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError" && isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url, paramsString, optionsString, params, options]);

  return { data, error, loading };
}
