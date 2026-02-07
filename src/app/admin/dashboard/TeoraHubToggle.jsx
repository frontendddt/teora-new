// 'use client';

// import { useState } from 'react';
// import { Switch } from 'antd';

// export default function TeoraHubToggle({ initialVisible = 0 }) {
//   const [isVisible, setIsVisible] = useState(initialVisible === 1);
//   const [loading, setLoading] = useState(false);

//   const handleToggle = async (_event, checked) => {
//     setIsVisible(checked);
//     setLoading(true);

//     try {
//       await fetch('/api/header-button-visibility', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ is_visible: checked ? 1 : 0 }),
//       });
//     } catch (error) {
//       console.error('Failed to update visibility:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <span className="d-flex gap-3 align-items-center purpleColor">
//       <b>Teora Hub</b>
//       <Switch
//         checked={isVisible}
//         onChange={handleToggle}
//         disabled={loading}
//       />
//     </span>
//   );
// }
