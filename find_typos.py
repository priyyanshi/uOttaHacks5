from flask import Flask, request, jsonify, make_response
import nltk
nltk.download('punkt')
nltk.download('words')
from nltk.metrics import edit_distance
import sys


app = Flask(__name__)

def find_typos_with_nltk(text):
  words = nltk.word_tokenize(text)
  typos = []
  
  for word in words:
    suggestions = nltk.corpus.words.words('en')
    if word not in suggestions and min(edit_distance(word, suggestion) for suggestion in suggestions) <= 2:
      typos.append(word)
  
  return typos

@app.before_request
def before_request():
    if request.method == "OPTIONS":
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Methods", "POST")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type")
        return response

@app.route('/find_typos', methods=['POST'])
def find_typos():
  text = request.json['text']
  typos = find_typos_with_nltk(text)
  print(typos)
  sys.stdout.flush()

  response = make_response(jsonify({"typos": typos}))
  response.headers.add("Access-Control-Allow-Origin", "*")
  return response

if __name__ == '__main__':
  app.run(debug=True)