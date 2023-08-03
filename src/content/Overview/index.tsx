import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Overview() {
  const router = useRouter();

  useEffect(() => {
    router.push('/onboarding');
  }, []);

  return <>Loading...</>;
}

export default Overview;
