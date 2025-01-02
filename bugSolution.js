```javascript
// Solution: Check if component is mounted before accessing ref
import React, { useRef, useEffect, useState } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (mounted && myRef.current) {
        console.log('Ref value:', myRef.current.value);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      setMounted(false);
    };
  }, []);

  return (
    <View>
      <TextInput ref={myRef} />
    </View>
  );
};
```