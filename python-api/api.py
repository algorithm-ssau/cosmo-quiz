from flask import Flask, request, jsonify
import random

app = Flask(__name__)


@app.route('/check-questions', methods=['GET'])
def check_questions():
    data = request.json
    correct_words = data.get('correct_words')
    input_words = data.get('input_words')
    all_mistakes: list[list[int]] = []
    for correct_word, input_word in zip(correct_words, input_words, strict=True):
        mistakes = []
        for i in range(len(correct_word)):
            if input_word[i].lower() != correct_word[i].lower():
                mistakes.append(i)
        all_mistakes.append(mistakes)
    return jsonify(all_mistakes), 200


@app.route('/create', methods=['GET'])
def create_array():
    data = request.json
    words: list[str] = data.get('words')
    letters: list[str] = []
    for word in words:
        letters.extend(list(word.upper()))
    while len(letters) % len(words) != 0:
        letters.append(chr(random.randint(1040, 1071)))
    random.shuffle(letters)
    return jsonify(letters), 200


if __name__ == '__main__':
    app.run(port=5002, debug=True)
