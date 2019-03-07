export function convert(input: string)
{
    console.log("Converting to cherokee!!!");
    var c=" ";
    var i=0;
    var j=0;
    var k=0;
    var flag=0;
    var rom=input+" ";
    const cons=["g","k","h","l","m","n","q","s","d","t","c","j","w","y","qu","qw","gw","kw","dl","tl","ts","ch","dz"];
    const vowel=["a","e","i","o","u","v"];
    const syl=[["Ꭶ","Ꭸ","Ꭹ","Ꭺ","Ꭻ","Ꭼ"],["Ꭷ","Ꭸ","Ꭹ","Ꭺ","Ꭻ","Ꭼ"],["Ꭽ","Ꭾ","Ꭿ","Ꮀ","Ꮁ","Ꮂ"],["Ꮃ","Ꮄ","Ꮅ","Ꮆ","Ꮇ","Ꮈ"],["Ꮉ","Ꮊ","Ꮋ","Ꮌ","Ꮍ","Ᏽ"],["Ꮎ","Ꮑ","Ꮒ","Ꮓ","Ꮔ","Ꮕ"],["Ꮖ","Ꮗ","Ꮘ","Ꮙ","Ꮚ","Ꮛ"],["Ꮜ","Ꮞ","Ꮟ","Ꮠ","Ꮡ","Ꮢ"],["Ꮣ","Ꮥ","Ꮧ","Ꮩ","Ꮪ","Ꮫ"],["Ꮤ","Ꮦ","Ꮨ","Ꮩ","Ꮪ","Ꮫ"],["Ꮳ","Ꮴ","Ꮵ","Ꮶ","Ꮷ","Ꮸ"],["Ꮳ","Ꮴ","Ꮵ","Ꮶ","Ꮷ","Ꮸ"],["Ꮹ","Ꮺ","Ꮻ","Ꮼ","Ꮽ","Ꮾ"],["Ꮿ","Ᏸ","Ᏹ","Ᏺ","Ᏻ","Ᏼ"],["Ꮖ","Ꮗ","Ꮘ","Ꮙ","Ꮚ","Ꮛ"],["Ꮖ","Ꮗ","Ꮘ","Ꮙ","Ꮚ","Ꮛ"],["Ꮖ","Ꮗ","Ꮘ","Ꮙ","Ꮚ","Ꮛ"],["Ꮖ","Ꮗ","Ꮘ","Ꮙ","Ꮚ","Ꮛ"],["Ꮬ","Ꮮ","Ꮯ","Ꮰ","Ꮱ","Ꮲ"],["Ꮭ","Ꮮ","Ꮯ","Ꮰ","Ꮱ","Ꮲ"],["Ꮳ","Ꮴ","Ꮵ","Ꮶ","Ꮷ","Ꮸ"],["Ꮳ","Ꮴ","Ꮵ","Ꮶ","Ꮷ","Ꮸ"],["Ꮳ","Ꮴ","Ꮵ","Ꮶ","Ꮷ","Ꮸ"]];
    while (rom.length>1) {
        i=0;
        while(isAlpha(rom[i])) {
            i=i+1;
        }
        if (i==0) {
            if (rom[0]=="#") break;
            c=c+rom[0];
            rom=rom.slice(1);
        }
        else if (i==1) {
            if (rom[0].toLowerCase()=='a') {
                c=c+'Ꭰ';
                if(rom[1]=="."&& isAlpha(rom[2])) rom=rom.slice(2)
                else rom=rom.slice(1);
            }
            else if (rom[0].toLowerCase()=='e') {
                c=c+'Ꭱ';
                if(rom[1]=="."&& isAlpha(rom[2])) rom=rom.slice(2);
                else rom=rom.slice(1);
            }
            else if (rom[0].toLowerCase()=='i') {
                c=c+'Ꭲ';
                if(rom[1]=="."&& isAlpha(rom[2])) rom=rom.slice(2);
                else rom=rom.slice(1);
            }
            else if (rom[0].toLowerCase()=='o') {
                c=c+'Ꭳ';
                if(rom[1]=="."&& isAlpha(rom[2])) rom=rom.slice(2);
                else rom=rom.slice(1);
            }
            else if (rom[0].toLowerCase()=='u') {
                c=c+'Ꭴ';
                if(rom[1]=="."&& isAlpha(rom[2])) rom=rom.slice(2);
                else rom=rom.slice(1);
            }
            else if (rom[0].toLowerCase()=='v') {
                c=c+'Ꭵ';
                if(rom[1]=="."&& isAlpha(rom[2])) rom=rom.slice(2);
                else rom=rom.slice(1);
            }
            else if (rom[0].toLowerCase()=='s') {
                c=c+'Ꮝ';
                if(rom[1]=="."&& isAlpha(rom[2])) rom=rom.slice(2);
                else rom=rom.slice(1);
            }
            else {
                c=c+rom.slice(0,2);;
                rom=rom.slice(2);;
            };
        }
        else if (i==2) {
            j=0;
            k=0;
            flag=0;
            for (var j = 0; j < 14; j++) {
                if (rom[0].toLowerCase()==cons[j]) {
                    for (var k = 0; k < 6; k++) {
                        if (rom[1].toLowerCase()==vowel[k]) {
                            flag=1;
                            break;
                        };
                    };
                };
                if(flag) break;
            };
            if(flag) {
                c=c+syl[j][k];
                if(rom[2]=="."&& isAlpha(rom[3])) rom=rom.slice(3);
                else rom=rom.slice(2);
            }
            else {
                c=c+rom.slice(0, 3);
                rom=rom.slice(3);
            };
        }
        else if (i==3) {
            j=0;
            k=0;
            flag=0;
            for (j = 14; j < 23; j++) {
                if (rom.slice(0,2).toLowerCase()==cons[j]) {
                    for (k = 0; k < 6; k++) {
                        if (rom[2].toLowerCase()==vowel[k]) {
                            flag=1;
                            break;
                        };
                    };
                };
                if(flag) break;
            };
            if(flag) {
                c=c+syl[j][k];
                if(rom[3]=="." && isAlpha(rom[4])) rom=rom.slice(4);
                else rom=rom.slice(3);
            }
            else if (rom.slice(0,3).toLowerCase()=="nah") {
                c=c+"Ꮐ";
                if(rom[3]=="." && isAlpha(rom[4])) rom=rom.slice(4);
                else rom=rom.slice(3);
            }
            else if (rom.slice(0,3).toLowerCase()=="hna") {
                c=c+"Ꮏ";
                if(rom[3]=="." && isAlpha(rom[4])) rom=rom.slice(4);
                else rom=rom.slice(3);
            }
            else {
                c=c+rom.slice(0, 4);
                rom=rom.slice(4);
            };
        }
        else {
            c=c+rom.slice(0,i+1);
            rom=rom.slice(i+1);
        };
    };
    return c;
}

function isAlpha(ch: string){
    return /^[A-Z]$/i.test(ch);
}