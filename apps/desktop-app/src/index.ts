import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

app.on('ready', () => {
  console.log('App is ready');
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
        nodeIntegration: true,
      }
  });
  console.log('dddd');
  const indexHTML = path.join(__dirname + '/index.html');

//   win.loadFile(indexHTML).then(() => {
//     // IMPLEMENT FANCY STUFF HERE
// });
    win.loadURL("http://localhost:3000")
        .then(console.log)
        .catch(console.error)

        ipcMain.handle('msg', async (event, ...args) => {
            console.log(args)
            return "ciao";
          })
}); 

