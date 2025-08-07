# evio-tauri-client
A lightweight Tauri-based desktop Client for the browser game [ev.io](https://ev.io), optimized for lightweight and performance.

## Features

- Tooggle fullscreen using F11.
- Custom ui to refresh page and paste ev.io room link easily.
- Optimization using Chromium flag.
- Rearrange the in-game ui and remove ads.
- Very lightweight and can be packaged as a small "exe" file.
- Fast launch speed, launch less than a second.

## Requirements

To build the application, ensure the following are installed:

- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js and npm](https://nodejs.org/)
- Tauri CLI

```bash
cargo install create-tauri-app
npm install -g @tauri-apps/cli

For anyone want to build it locally

1. Clone the respository:

```bash
git clone https://github.com/yourusername/evio-desktop-wrapper.git
cd evio-desktop-wrapper

2. Install dependencies:

```bash
npm install

3. Build the application:

```bash
npm run tauri build

License
This project is licensed under the MIT License.

Disclaimer: This project is not affiliated with, endorsed by, or supported by ev.io or Enthusiast Gaming. It is provided as-is for personal and educational purposes.
