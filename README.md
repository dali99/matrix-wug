# About
This is a bot for converting x- or z-sampa to IPA, or converting a custom ascii notation to standard PIE notation.

Simply type your ascii inside // or [] with a prefixed x, z or p for x-sampa, z-sampa and PIE-notation respectively.  
For instance:  
x[sts_>q_hts_ht_hx] gives [st͡sʼqʰt͡sʰtʰx]  
x/dZAn "m{d@n/ gives /d͡ʒɑn ˈmædən/  
p[x2"owis x1"ek'wo:s-kve] gives *h₂ówis h₁é"kwōs-kʷe


Guides to these systems can be found here:  
X-sampa: https://en.wikipedia.org/wiki/X-SAMPA  
Z-sampa: http://www.kneequickie.com/kq/Z-SAMPA  
For the PIE notation:

* a preceding " is acute accent
* a following : is the macron
* a following . is the syllabicity marker
* h always becomes superscript and v is superscript w.
* Palato-velars are marked with a following ' and x1, x2, x3 etc. yields the laryngeals, with x@ for the subscript a laryngeal, and xx for an unknown laryngeal.

This is best learned by experimenting.

These conversions were originally taken from [xsduan/conniebot](https://github.com/xsduan/conniebot). But have later divirged a bit.

To use the bot I run an instance at [@wug:dodsorf.as](https://matrix.to/#/@wug:dodsorf.as), you can invite it to a room or DM it to use the converter. Or you can read the setup instructions below to host your own!

# Setup
1. Copy `config.json.example` to `config.json`
2. Change the homeserver value to your homeserver api url (i.e "https://matrix.dodsorf.as")
3. Change the token value to your users token. see https://t2bot.io/docs/access_tokens/ for how to get one.
4. `npm install` and `npm start`

You could also build a docker image but you're on your own there!

# Development
`npm install` and `npm start`

If you use nix you can run shell.nix to get node and npm in your environment.  
If you use direnv you can also load the shell automatically