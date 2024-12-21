def format_results_as_qa(data: dict) -> str:

    answers = data.get("results", [])
    if not answers or len(answers) < 7:
        return "Error: insufficient data in results"

    questions = [
        "What kind of house do you want?",
        "Do you have a plot for construction?",
        "How many floors will there be in the house?",
        "What area of the house are you considering?",
        "What rooms do you want for the comfort of the whole family?",
        "What do you want included with the house?",
        "Name",
        "Phone",
    ]

    lines = []


    lines.append(f"1. {questions[0]} -> {answers[0]}")

    lines.append(f"2. {questions[1]} -> {answers[1]}")

    lines.append(f"3. {questions[2]} -> {answers[2]}")

    lines.append(f"4. {questions[3]} -> {answers[3]}")

    if isinstance(answers[4], list):
        rooms = ", ".join(answers[4])
        lines.append(f"5. {questions[4]} -> {rooms}")
    else:
        lines.append(f"5. {questions[4]} -> {answers[4]}")


    if isinstance(answers[5], list):
        includes = ", ".join(answers[5])
        lines.append(f"6. {questions[5]} -> {includes}")
    else:
        lines.append(f"6. {questions[5]} -> {answers[5]}")


    if isinstance(answers[6], dict):
        name = answers[6].get("name", "No name")
        phone = answers[6].get("tel", "No phone")
        lines.append(f"7. {questions[6]} -> {name}")
        lines.append(f"8. {questions[7]} -> {phone}")
    else:
        lines.append(f"7. {questions[6]} -> ???")
        lines.append(f"8. {questions[7]} -> ???")

    return "\n".join(lines)
