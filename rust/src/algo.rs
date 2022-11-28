use rand::Rng;

pub fn get_ramdom_number(max: u32) -> u32 {
    rand::thread_rng().gen_range(0..max)
}
