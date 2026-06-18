'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { disableBrowserScrollRestoration, scrollToTop } from '@/utils/scroll';

const ScrollToTop = () => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    disableBrowserScrollRestoration();
  }, []);

  useLayoutEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
