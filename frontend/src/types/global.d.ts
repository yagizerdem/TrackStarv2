export {};

declare global {
  interface Window {
    windowController: WindowController;
  }

  interface WindowController {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  }
}
