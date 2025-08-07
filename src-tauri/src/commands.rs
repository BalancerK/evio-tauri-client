#[tauri::command]
fn toggle_solo_mode(handle: AppHandle) {
  println!("Solo mode toggled (frontend can implement logic)");
  // You can use handle.get_window("main") to send more complex events or rebuild logic here
}
