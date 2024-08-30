"use client";
import { useCallback, useState } from "react";

export default function AccountConnection({
  title,
  accountName,
}: {
  title?: string;
  accountName?: string;
}) {
  const [connected, setConnected] = useState(false);

  const handleAction = useCallback(() => {
    setConnected((connected) => !connected);
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p>{connected ? accountName : ""}</p>
            <div>
              <h1>{title || "Example App"}</h1>
              <p>{connected ? "Account connected" : "No account connected"}</p>
            </div>
          </div>

          <button onClick={handleAction}>
            {connected ? "Disconnect" : "Connect"}
          </button>
        </div>

        {connected ? null : (
          <p>
            By clicking <strong>Connect</strong>, you agree to accept Sample
            App’s <a href="Example App">terms and conditions</a>. You'll pay a
            commission rate of 15% on sales made through Sample App.
          </p>
        )}
      </div>
    </div>
  );
}
