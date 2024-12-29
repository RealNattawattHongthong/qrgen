# QR Code Generator

This project is a simple QR code generator website that allows users to input text or URLs and generate corresponding QR codes. The generated QR codes can be downloaded or shared easily.

## Project Structure

```
qr-code-generator
├── src
│   ├── index.html        # Main HTML document for the QR code generator
│   ├── styles
│   │   └── style.css     # CSS styles for the website
│   └── scripts
│       └── app.js        # JavaScript code for QR code generation functionality
├── package.json          # npm configuration file
└── README.md             # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd qr-code-generator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `src/index.html` in your web browser.
2. Enter the text or URL you want to convert into a QR code.
3. Click the "Generate QR Code" button to create the QR code.
4. The generated QR code will be displayed on the page, and you can download it if needed.

## GitHub Pages Deployment

This project is configured to be deployed to GitHub Pages using GitHub Actions. Follow these steps to set up the deployment:

1. Ensure you have a `gh-pages` branch in your repository. If not, create one:
   ```
   git checkout --orphan gh-pages
   git reset --hard
   git commit --allow-empty -m "Initialize gh-pages branch"
   git push origin gh-pages
   git checkout main
   ```

2. Update the `homepage` field in `package.json` to point to your GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/<repository-name>"
   ```

3. Push your changes to the `main` branch. The GitHub Actions workflow will automatically deploy the site to GitHub Pages.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
