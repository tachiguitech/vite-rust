extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
mod algo;

#[wasm_bindgen]
pub fn get_number() -> i32 {
    algo::get_number()
}
