#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{WebviewUrl, WebviewWindowBuilder};

#[tauri::command]
fn toggle_fullscreen(window: tauri::Window) {
    let is_fullscreen = window.is_fullscreen().unwrap_or(false);
    window.set_fullscreen(!is_fullscreen).unwrap();
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            WebviewWindowBuilder::new(
                app,
                "main",  // Use a single consistent label
                WebviewUrl::External("https://ev.io/".parse().unwrap()),
            )
            .title("ev.io Desktop")
            .initialization_script(include_str!("../patch.js"))
            .additional_browser_args(
                "--enable-accelerated-2d-canvas \
                --disable-gpu-vsync \
                --disable-frame-rate-limit \
                --disable-renderer-backgrounding \
                --disable-software-rasterizer \
                --disable-software-compositing-fallback \
                --disable-gpu-process-crash-limit \
                --disable-background-timer-throttling \
                --disable-background-networking \
                --disable-backgrounding-occluded-windows \
                --disable-ipc-flooding-protection\
                --enable-gpu-compositing\
                --no-zygote \
                --disable-breakpad \
                --force-gpu-rasterization \
                --disable-2d-canvas-clip-aa \
                --enable-skia-graphite \
                --enable-zero-copy \
                --canvas-msaa-sample-count=0 \
                --v8-cache-options=code \
                --high-dpi-support=1 \
                --no-sandbox \
                --disable-backing-store-limit \
                --disable-v8-idle-tasks \
                --enable-future-v8-vm-features \
                --ignore-gpu-blocklist"
            )
            .maximized(true)  // Start maximized, not fullscreen
            .build()?;
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![toggle_fullscreen])
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
