const { Telegraf } = require("telegraf")
const { parseHTMLPage } = require("./html");
const { convertTextToAudio } = require("./convert");
require("dotenv").config()

const Token = process.env.TOKEN

const bot = new Telegraf(Token)
console.log("bot is running")
bot.start((ctx) => ctx.reply('Welcome to Big Mouth'))
bot.help((ctx) => ctx.reply(`The program start by converting the blogpost from the url into plain text.
The text will then be passed to google-tts-api to convert the text into splitted audio files .
With the help of a special package FFMPEG the splitted audio files will then be merged back into one whole file and be stored in filename given to the CLI at the start of the program.
`))


bot.hears(/\/bigmouth (.+)/, async(ctx) => {
  // Explicit usage
    const url = (ctx.match[1]);
    const text = await parseHTMLPage(url);
    const splittedtext = url.split("/");  
    const audioname = (splittedtext[splittedtext.length - 1] == "" ? `${splittedtext[splittedtext.length - 2].substring(0, 25)}.mp3` : `${splittedtext[splittedtext.length - 1].substring(0, 25)}.mp3`)
    await convertTextToAudio(text, `./outputAudio/${audioname}`);
    ctx.replyWithAudio({ source: `./outputAudio/${audioname}` })

  
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))