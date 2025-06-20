import json
initial_data = [
    {"name": "Alice", "age": 28},
    {"name": "Bob", "age": 32}
]

try:
    with open('users.json', 'w') as f:
        json.dump(initial_data, f, indent=2)
except Exception as e:
    print(f'error: {e}')

try:
    with open('users.json', 'r') as f:
        users = json.load(f)
except Exception as e:
    print(f'{e}')

name = input("your name?")
age_input = input('your age?')


try:
    age = int(age_input)
except Exception as e:
    print(f'{e}')

new_user = {"name": name, "age": age_input}
users.append(new_user)

try:
    with open('users.json', 'w') as f:
        json.dump(users, f, indent=2)
except Exception as e:
    print(f'{e}')
