'use client';
import * as Switch from '@radix-ui/react-switch';
export default function HeaderSwitch({ checked, onCheckedChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Switch.Root
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="switch-root"
        id="switch"
        data-state={checked ? 'checked' : 'unchecked'}
      >
        <Switch.Thumb className="switch-thumb" />
      </Switch.Root>

      <span style={{ fontSize: 14, fontWeight: 500 }}>
        {checked ? 'Show' : 'Hide'}
      </span>

      <style jsx>{`
        .switch-root {
          width: 42px;
          height: 25px;
          background-color: #d1d5db;
          border-radius: 9999px;
          position: relative;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .switch-root[data-state='checked'] {
          background-color: #4ade80; /* green */
        }

        .switch-thumb {
          display: block;
          width: 21px;
          height: 21px;
          background-color: white;
          border-radius: 9999px;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease;
          transform: translateX(2px);
        }

        .switch-root[data-state='checked'] .switch-thumb {
          transform: translateX(17px);
        }
      `}</style>
    </div>
  );
}
