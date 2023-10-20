def isValid(s: str) -> bool:
    stack = []
    hashMap = {
        ")":"(",
        "}":"{",
        "]":"["
    }
    for p in s:
        if p in hashMap:
            print(hashMap[p])
            if stack and stack[-1] == hashMap[p]:
                stack.pop()
            else:
                return False
        else:
            stack.append(p)
    return True if not stack else False

isValid("()[]{}")
