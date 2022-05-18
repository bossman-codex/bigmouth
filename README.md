# Big Mouth👄

Big Mouth is a tool that converts large and small Blogpost from raw-text into an audio file.

## Installation

Use the package manager NPM to install Big Mouth.

```bash
$ npm ci
```

## How Does Big Mouth Work

Thr program start by getting the text from the url passed in the cli when the code started, passes the url through a function that converts the blogpost into text.
The text will then be passed to google-tts-api to convert the text into splitted audio files .
With the help of a special package FFMPEG the splitted audio files will then be merged back into on whole file and be stored in filename given to the cli at the start of the program.

## CLI

```bash
Big Mouth

  Converts blog posts to mp3 audio :D

  Usage:
  node index --args

  Examples:
  node index -u=https://some-site/blog-post -o=pathToFile.mp3

  node index --url=https://some-site/blog-post --output=pathToFile.mp3


Options

  -u, --url string      required, Website url of blog post, example (https://some-site/blog-post)
  -o, --output string   required, the path of the output file, example (./output.mp3)
  -h, --help            Print this usage guide.
```

## Usage

How to start Big Mouth

```bash
$ node index -u=https://some-site/blog-post -o=pathToFile.mp3
```
