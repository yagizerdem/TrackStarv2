import { BrowserWindow, app } from "electron";
import * as path from "path";

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      Main.application.quit();
    }
  }

  private static onClose() {
    // Dereference the window object.
    Main.mainWindow = null;
  }

  private static onReady() {
    Main.mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      },
    });

    if (!app.isPackaged) {
      // dev
      Main.mainWindow.loadURL("http://localhost:5173/");
    } else {
      // prod
    }
    Main.mainWindow.on("closed", Main.onClose);
  }

  static main(app: Electron.App) {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class has no dependencies. This
    // makes the code easier to write tests for
    Main.application = app;
    Main.application.on("window-all-closed", Main.onWindowAllClosed);
    Main.application.on("ready", Main.onReady);
  }
}
