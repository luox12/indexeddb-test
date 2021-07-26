const {
    app,
    BrowserWindow,
} = require("electron");

let mainWindow = null;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            devTools: true,
        },
        maximizable:true,
        enableRemoteModule: true,
        backgroundColor: "#f0f0f0",
    });
    mainWindow.loadURL(
        "http://localhost:3001/index.html"
    );
})

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});
