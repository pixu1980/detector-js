let root;

if (typeof window !== 'undefined') {
  root = window;
} else if (typeof globalThis !== 'undefined') {
  root = globalThis;
} else {
  root = {};
}

root.Reflect = root.Reflect || {};
