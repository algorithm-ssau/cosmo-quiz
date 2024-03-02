from flask import Flask, request
app = Flask(__name__)

@app.route('/check-questions', methods=['GET'])
def check_questions():
    data = request.json
    correct_words = data.get('correct_words')
    input_words = data.get('input_words')
    for correct_word, input_word in zip(correct_words, input_words):
        pass
    return 'Hello World!', 200

if __name__ == '__main__':
    app.run(port=5002, debug=True)