function thienCan(nam) {
    let can = nam % 10
    if (can == 0)
        return "Canh"
    if (can == 1)
        return "Tân"
    if (can == 2)
        return "Nhâm"
    if (can == 3)
        return "Quý"
    if (can == 4)
        return "Giáp"
    if (can == 5)
        return "Ất"
    if (can == 6)
        return "Bính"
    if (can == 7)
        return "Đinh"
    if (can == 8)
        return "Mậu"
    if (can == 9)
        return "Kỷ"
}

function diaChi(nam) {
    let chi = nam % 12
    if (chi == 0)
        return "Thân"
    if (chi == 1)
        return "Dậu"
    if (chi == 2)
        return "Tuất"
    if (chi == 3)
        return "Hợi"
    if (chi == 4)
        return "Tý"
    if (chi == 5)
        return "Sửu"
    if (chi == 6)
        return "Dần"
    if (chi == 7)
        return "Mão"
    if (chi == 8)
        return "Thìn"
    if (chi == 9)
        return "Tỵ"
    if (chi == 10)
        return "Ngọ"
    if (chi == 11)
        return "Mùi"
}
let year = 2003
console.log(thienCan(year), diaChi(year));
