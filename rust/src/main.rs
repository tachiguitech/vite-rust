mod algo;

fn main() {
    let n = algo::get_ramdom_number(100);
    println!("{:?}", algo::calc_factors(n));
}
