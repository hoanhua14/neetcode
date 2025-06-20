with open('input.txt', 'w') as f:
    f.write('lorem posum\n')
    f.write('lorem podededm\n')
    f.write('lorem pfwfwfwfwm\n')

with open('input.txt', 'r') as f:
    counter = 0
    for word in f:
        print(word)
        for char in word:
            if char.isalnum():
                counter+=1
    print(f'Total: {counter}')

with open('input.txt', 'r') as f:
    words = 0
    for line in f:
        words += len(line.split())
    print(f'Words: {words}')

with open('input.txt', 'r') as f:
