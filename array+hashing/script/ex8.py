import shutil
from collections import Counter, defaultdict
with open('message.txt', 'w') as f:
    f.write('hello\n')
    f.write('my name is So Hoan\n')
    f.write('i"m 30\n')
    f.write('i"m married\n')

try:
    shutil.copy('message.txt', 'copy.txt')
    with open('copy.txt', 'r') as f:
        content = f.read()
        counter = defaultdict(int)
        for line in content:
            counter[line] += 1
        for k, v in counter.items():
            print(f'{k}: {v}')


except Exception as e:
    print(f'error: {e}')
