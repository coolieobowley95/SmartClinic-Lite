export type GetStyleInfo = (resolved: {
  element: Element | null;
}) => {
  className: string;
  styles: Record<string, string> | null;
};

type SelectionResolved = {
  element: Element | null;
};

/**
 * Lightweight "design mode" glue for the web sandbox.
 *
 * The upstream project this repo was derived from includes a richer implementation,
 * but SmartClinic Lite only needs enough to satisfy the import and avoid runtime
 * side effects in normal (non-iframe) browsing.
 *
 * When embedded (iframe), this:
 * - tracks the last clicked element
 * - posts selection info to the parent window
 */
export function initDesignMode(getStyleInfo: GetStyleInfo): () => void {
  if (typeof window === 'undefined') return () => {};
  // Avoid affecting the normal app; only enable when embedded in an iframe.
  if (window.parent === window) return () => {};

  let selected: Element | null = null;

  const postSelection = () => {
    const payload = getStyleInfo({ element: selected } as SelectionResolved);
    window.parent.postMessage(
      {
        type: 'sandbox:design-mode:selection',
        ...payload,
      },
      '*'
    );
  };

  const onClick = (e: MouseEvent) => {
    // Only track element clicks; ignore clicks on the document itself.
    const target = e.target;
    selected = target instanceof Element ? target : null;
    postSelection();
  };

  const onMessage = (e: MessageEvent) => {
    const data = e?.data;
    if (!data || typeof data !== 'object') return;
    if ((data as any).type === 'sandbox:design-mode:request-selection') {
      postSelection();
    }
    if ((data as any).type === 'sandbox:design-mode:clear-selection') {
      selected = null;
      postSelection();
    }
  };

  window.addEventListener('click', onClick, true);
  window.addEventListener('message', onMessage);

  // Let the parent know this feature exists.
  window.parent.postMessage({ type: 'sandbox:design-mode:ready' }, '*');

  // Return a function used after HMR; try to keep selection in sync.
  return () => {
    if (selected && !document.contains(selected)) {
      selected = null;
    }
    postSelection();
  };
}
