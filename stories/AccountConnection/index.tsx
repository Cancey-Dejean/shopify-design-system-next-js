"use client";
import { useCallback, useState } from "react";

export default function AccountConnection({
  title,
  accountName,
}: {
  title?: string;
  accountName?: string;
  handleAction?: () => void;
}) {
  const [connected, setConnected] = useState(false);

  const handleAction = useCallback(() => {
    setConnected((connected) => !connected);
  }, []);

  return (
    <div className="rounded-[var(--p-border-radius-300)] bg-[var(--p-color-bg-surface)] p-4 shadow-[var(--p-shadow-100)] [font-size:var(--p-font-size-325)]">
      <div className="flex flex-col justify-end gap-4">
        <div className="flex justify-between gap-4">
          <div className="flex gap-4">
            {connected && (
              <span className="flex size-7 gap-2 rounded-[0.375rem] bg-[var(--p-color-avatar-five-bg-fill)]">
                <svg viewBox="0 0 40 40" className="size-full">
                  <text
                    x="50%"
                    y="50%"
                    dy="0.35em"
                    fill="currentColor"
                    text-anchor="middle"
                    className="[color:var(--p-color-bg-surface)]"
                  >
                    {accountName?.slice(0, 2).toUpperCase()}
                  </text>
                </svg>
              </span>
            )}

            <div>
              <p>{title || "Example App"}</p>
              <p className="[color:var(--p-color-text-secondary)]">
                {connected ? "Account connected" : "No account connected"}
              </p>
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
