with open('numbers.txt', 'w') as f:
    for i in range(1,11):
        f.write(f'{i}\n')

with open('numbers.txt', 'r') as f:
    for line in f:
        num = int(line)
        print(f'{num} squared is {num**2}')
