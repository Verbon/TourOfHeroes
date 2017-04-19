import { app, BrowserWindow } from 'electron';


class App {
    private static _mainWindow: Electron.BrowserWindow | null;


    public static run() : void {
        app.on('ready', App.onReady);
        app.on('window-all-closed', App.onWindowAllClosed);
    }


    private static onWindowAllClosed() : void {
        if(process.platform !== 'darwin') {
            app.quit();
        }
    }

    private static onClosed() : void {
        App._mainWindow = null;
    }

    private static onReady() : void {
        App._mainWindow = new BrowserWindow({
            width: 1024,
            height: 768
        });
        App._mainWindow.on('closed', App.onClosed);
        App._mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    }
}


App.run();