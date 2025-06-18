from typing import List, Tuple


def best_student(scores: List[Tuple[str, int]]) -> str:
    student, highest_score = scores[0]
    for name, score in scores:
        if score > highest_score:
            student, highest_score = name, score
    return student


# do not modify below this line
print(best_student([("Alice", 90), ("Bob", 80), ("Charlie", 70)]))
print(best_student([("Alice", 90), ("Bob", 80), ("Charlie", 100)]))
print(best_student([("Alice", 90), ("Bob", 100), ("Charlie", 70)]))
print(best_student([("Alice", 90), ("Bob", 90), ("Charlie", 80), ("David", 100)]))
