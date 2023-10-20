def isPalindrome(s) -> bool:
    filtered = ""
    for char in s:
        if char.isalnum():
            filtered = filtered + char
    print(filtered[::-1])
    if filtered == filtered[::-1]:
        return True
    else:
        return False

isPalindrome("ra reiw")
