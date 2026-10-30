# The Hot Seat by N — Website

Files: index, about, services, gallery, contact (.html) + css/style.css, js/main.js, js/data.js, google-apps-script/Code.gs

## Connect Google Sheets + auto-reply (10 minutes)
1. Create a Google Sheet. Add tabs: **Services** (columns: category | name | price) and **Gallery** (category | caption | image_url). Copy the rows from js/data.js into Services; paste public image links into Gallery.
2. In the sheet: Extensions > Apps Script. Paste google-apps-script/Code.gs, save.
3. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Authorise, then copy the Web app URL.
4. Paste that URL into `SCRIPT_URL` in js/data.js.
5. Submit the contact form. A "Bookings" tab is created, the customer gets an auto-reply email, and you get a notification.

## Real photos from Google Drive
Pick ONE (or both):
- **Easiest:** in your Drive, make a folder (e.g. "Hot Seat Gallery") with sub-folders named exactly like your categories (Nails, Braids & Styles, Wigs & Weaves, Make-Up, Lashes). Drop photos in. Copy the folder ID (the end of the folder's URL after /folders/) into `GALLERY_FOLDER_ID` at the top of Code.gs, then run the `makeGalleryPublic` function once from the Apps Script editor (Run button) and approve the permissions.
- **Or per photo:** in the Gallery tab put the Drive share link in `image_url` (right-click file > Share > Anyone with the link > Copy link). Links are converted automatically.

After changing Code.gs: Deploy > Manage deployments > edit (pencil) > Version: New version > Deploy. (The URL stays the same.) Changes show on the site within about 2 minutes.

Editing the sheet updates prices and gallery on the site. Until SCRIPT_URL is set, the site shows the built-in prices and placeholder gallery tiles.
Host on Netlify, GitHub Pages or any web host by uploading the whole folder.
