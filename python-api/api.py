import json
from flask import Flask, request
app = Flask(__name__)

@app.route('/check-questions', methods=['GET'])
def check_questions():
    data = request.json
    correct_words = data.get('correct_words')
    input_words = data.get('input_words')
    all_mistakes: list[list[int]] = []
    for correct_word, input_word in zip(correct_words, input_words):
        mistakes = []
        for i in range(len(correct_word)):
            if input_word[i] != correct_word[i]:
                mistakes.append(i)
        all_mistakes.append(mistakes)
    return json.dumps(all_mistakes), 200

if __name__ == '__main__':
    app.run(port=5002, debug=True)