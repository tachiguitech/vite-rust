extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
mod algo;

#[wasm_bindgen]
pub fn get_random_number(max: u32) -> u32 {
    algo::get_ramdom_number(max)
}

#[wasm_bindgen]
pub fn calc_factors(number: u32) -> Box<[u32]> {
    let mut vec = Vec::new();
    for (key, value) in algo::calc_factors(number) {
        vec.push(key);
        vec.push(value);
    }
    vec.into_boxed_slice()
}
