import { useEffect, useRef } from "react";

export default function useMountEffect(cb: (...args: any[]) => void) {
  const ref = useRef<boolean | null>(false);
  const cbRef = useRef(cb);

  useEffect(() => {
    if (!ref.current) {
      ref.current = (() => {
        cbRef.current();
        return true;
      })();
    }
  }, []);
}
