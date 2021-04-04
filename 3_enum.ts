enum Membership {
    Simple,
    Standart,
    Premium
}
const membership = Membership.Standart
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    vk = 'vkon',
    fb = 'faceb',
    inst = 'insta'
}

const social = SocialMedia.fb
console.log(social)