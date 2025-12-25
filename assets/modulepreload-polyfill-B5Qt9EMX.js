// Simple polyfill for module preload
if (!document.createElement('link').relList.supports('modulepreload')) {
  console.warn('Module preload not supported, consider updating browser.');
}
