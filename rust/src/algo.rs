use rand::Rng;
use std::collections::HashMap;

pub fn get_ramdom_number(max: u32) -> u32 {
    rand::thread_rng().gen_range(2..max)
}

pub fn calc_factors(number: u32) -> HashMap<u32, u32> {
    let mut current_number = number;

    let max = (number as f32).sqrt() as u32;
    let mut map: HashMap<u32, u32> = HashMap::new();
    for fact in 2..=max {
        let mut n: u32 = 0;
        while current_number % fact == 0 {
            current_number /= fact;
            n += 1;
        }
        if n != 0 {
            map.insert(fact as u32, n);
        }
    }
    if current_number != 1 {
        map.insert(current_number, 1);
    }
    map
}
