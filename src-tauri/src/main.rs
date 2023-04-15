// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Manager, MenuItem, SystemTray, SystemTrayEvent, SystemTrayMenu};
use tauri::MenuItem::Quit;
use tauri_plugin_positioner::{Position, WindowExt};

fn main() {
    let system_tray_menu = SystemTrayMenu::new()
        .add_item(CustomMenuItem::new("quit".to_string(), "Quit").accelerator("Cmd+Q"));
    tauri::Builder::default()
        .plugin(tauri_plugin_positioner::init())
        .system_tray(SystemTray::new().with_menu(system_tray_menu))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => {
                let window = app.get_window("main").unwrap();
                // let _ = window.move_window(Position::TopRight);
                // if window.is_visible().unwrap() {
                //     window.hide().unwrap();
                // } else {
                //     window.show().unwrap();
                //     window.set_focus().unwrap();
                // }
            },
            _ => {}
        })
        .on_window_event(|event| match event.event() {
            tauri::WindowEvent::Focused(is_focused) => {
                // detect click outside of the focused window and hide the app
                // if !is_focused {
                //     event.window().hide().unwrap();
                // }
            }
            _ => {}
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
