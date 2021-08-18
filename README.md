# Aldabot

## About

Yet an other Discord bot. This one auto reacts on every messages from targeted users, with the emojis of your choice.

For example, if you want to spit on every messages of a hateful friend:

![Hateful friend punished](https://i.imgur.com/iIBRL6P.png)

Or showing your love to your cutest friends:

![Cute friend](https://i.imgur.com/p3DMEa1.png)

## Install

Install Node.js and Yarn.
Clone repository and install package dependencies.
```
git clone https://github.com/Glioburd/Aldabot.git
cd Aldabot
yarn
```

Rename your `config.sample.json` to `config.json`

Paste your token in the `token` field, paste the emojis of your choice in their respective array (*hateEmojis*, *loveEmojis*). In case of custom emoji, paste their id. [Here's how to get it](https://support.discord.com/hc/en-us/community/posts/360043210111/comments/360008563772).

Set the users you want to seek. Just put their username and their discriminator (the quad digit after their nickname : foo#**1234**) in their respective array (*hateTargets*, *loveTargets*)

Run `node index.js`

Enjoy.

## Additional informations

After a few messages, it will become very annoying for them and you'll cut the bot forever.
