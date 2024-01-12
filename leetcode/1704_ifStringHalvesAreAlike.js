var halvesAreAlike = function(s) {
    let splitted = Array.from(s);
    let vowels = ['u', 'e', 'o', 'a', 'i'];
    let first = splitted.slice(0, s.length/2);
    let second = splitted.slice(s.length/2, s.length);
    let counter1=0;
    for (let char of first) {
        if (vowels.includes(char.toLowerCase())) {
            counter1 += 1;
        }
    }
    let counter2=0;
    for (let char of second) {
        if (vowels.includes(char.toLowerCase())) {
            counter2 += 1;
        }
    }
    return (counter1==counter2)

};
