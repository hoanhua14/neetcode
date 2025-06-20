with open('numbers.txt', 'r') as f:
    for line in f:
        sum = 0
        num = ''
        for char in line:
            if char.isnumeric():
                num.append(char)
            else:
                sum += int(num)
    print(f'{sum}\n')
