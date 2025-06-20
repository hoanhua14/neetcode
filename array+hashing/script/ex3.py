with open('names.txt', 'r') as f:
    current_line = 0
    for line in f:
        current_line+=1
        print(f'LINE {current_line}: {line.strip().upper()}')
