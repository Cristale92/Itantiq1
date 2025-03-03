
import { memo, ComponentType, Suspense } from 'react';

/**
 * A higher-order component that memoizes a component to prevent unnecessary re-renders
 * @param Component The component to be memoized
 * @param propsAreEqual Optional custom comparison function
 * @returns Memoized component
 */
export function withMemo<T extends object>(
  Component: ComponentType<T>,
  propsAreEqual?: (prevProps: T, nextProps: T) => boolean
) {
  return memo(Component, propsAreEqual);
}

/**
 * Loading component for suspense fallbacks
 */
export const LazyLoader = () => (
  <div className="flex justify-center items-center p-4">
    <div className="text-antique-gold">Loading...</div>
  </div>
);

/**
 * HOC to add lazy loading to a component
 * @param Component Component to be lazy loaded
 * @returns Component wrapped in Suspense
 */
export function withLazy<T extends object>(Component: ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<LazyLoader />}>
      <Component {...props} />
    </Suspense>
  );
}

/**
 * Utility to add image loading delay to prevent layout shifts
 * @param src Image source URL
 * @returns Promise that resolves when image is loaded
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = reject;
  });
}
