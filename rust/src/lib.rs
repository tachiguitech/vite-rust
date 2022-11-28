extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
mod algo;

#[wasm_bindgen]
pub fn get_random_number(max: u32) -> u32 {
    algo::get_ramdom_number(max)
}
