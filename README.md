# evio-tauri-client

A lightweight, performance-optimized desktop client for the browser game [ev.io](https://ev.io), built with [Tauri](https://tauri.app).

## Features

- Toggle fullscreen mode using **F11**
- Custom UI with:
  - Page refresh button  
  - Easy room link pasting  
- Optimized using custom Chromium flags for better performance
- In-game HUD rearrangement and ad removal
- Compact executable with fast launch (under 1 second)
- No unnecessary dependencies or bloat
- Unlocked fps (get 300+ fps in my pc with Anti-aliasing disabled and 100 resolution)
- Small and compact size (3mb execution file)

## Requirements

To build the application locally, ensure the following are installed:

- [Rust](https://www.rust-lang.org/tools/install)
- [Node.js](https://nodejs.org/) and `npm`
- [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites)

```bash
cargo install create-tauri-app
npm install -g @tauri-apps/cli
```

## Getting Started

1. **Clone the repository**:

```bash
git clone https://github.com/BalancerK/evio-tauri-client.git
cd evio-tauri-client
```

2. **Install dependencies**:

```bash
npm install
```

3. **Build the application**:

```bash
npm run tauri build
```

This will generate a standalone `.exe` file in the `src-tauri/target/release/` folder.

## License

This project is licensed under the **MIT License**.

---

**Disclaimer**:  
This project is not affiliated with, endorsed by, or officially supported by **ev.io** or **Enthusiast Gaming**. It is developed solely for personal and educational purposes.
