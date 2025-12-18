export {};

declare global {
  interface Window {
    windowController: WindowController;
    accountController: AccountController;
  }

  interface WindowController {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  }

  interface AccountController {
    createAccount: () => Promise<void>;
  }
}
