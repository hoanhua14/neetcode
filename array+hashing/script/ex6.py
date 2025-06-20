with open('data.txt', 'w') as f:
    f.write('rehkqoopfllflellslwlldl\n')
    f.write('rehkqoopfllflellll\n')
    f.write('relllllellslwlldl\n')
    f.write('lllllllflellslwlldl\n')

with open('data.txt', 'r') as f:
    content = f.read()
    update = content.replace('l', 'L')

with open('data.txt', 'w') as f:
    f.write(update)
