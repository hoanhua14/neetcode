import shutil, os
with open('story.txt', 'w') as f:
    f.write('frwkhfvsurqop\n')
    f.write('frwkhfvsurqoaeup\n')
    f.write('frwkhfvsoieaoieurqop\n')
    print('file created')
    shutil.copy('story.txt', 'copy.txt')
try:
    with open('copy.txt', 'r') as f:

        content = f.read()
    remove = 'aeiouAEIOU'
    res = ''.join([char for char in content if char not in remove])
    with open('copy.txt', 'w') as f:
        f.write(res)
    shutil.replace('story.txt', 'copy.txt')
except FileNotFoundError:
    print('not found')
except Exception as e:
    print(f'error: {e}')
