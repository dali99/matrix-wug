export function convert(input: string)
{
    var c=" ";
    var rom=input+" ";
    var flag=0;
    while(rom.length > 1) {
        if(rom[1]=='^') {
            if(rom.length>=2 && rom[2]=='@') {
                if(rom[0]=='a') {
                    c=c+'ą́';
                    flag=1;
                }
                else if(rom[0]=='A') {
                    c=c+'Ą́';
                    flag=1;
                }
                else if(rom[0]=='e') {
                    c=c+'ę́';
                    flag=1;
                }
                else if(rom[0]=='E') {
                    c=c+'Ę́';
                    flag=1;
                }
                else if(rom[0]=='i') {
                    c=c+'į́'
                    flag=1
                }
                else if(rom[0]=='I') {
                    c=c+'Į́'
                    flag=1
                }
                else if(rom[0]=='o') {
                    c=c+'ǫ́'
                    flag=1
                }
                else if(rom[0]=='O') {
                    c=c+'Ǫ́'
                    flag=1
                }
                else if(rom[0]=='u') {
                    c=c+'ų́'
                    flag=1
                }
                else if(rom[0]=='U') {
                    c=c+'Ų́'
                    flag=1
                }
                if(flag) {
                    rom=rom.slice(3)
                    flag=0
                    continue
                }
            }
            else {
                if(rom[0]=='a') {
                    c=c+'á'
                    flag=1
                }
                else if(rom[0]=='A') {
                    c=c+'Á'
                    flag=1
                }
                else if(rom[0]=='e') {
                    c=c+'é'
                    flag=1
                }
                else if(rom[0]=='E') {
                    c=c+'É'
                    flag=1
                }
                else if(rom[0]=='i') {
                    c=c+'í'
                    flag=1
                }
                else if(rom[0]=='I') {
                    c=c+'Í'
                    flag=1
                }
                else if(rom[0]=='o') {
                    c=c+'ó'
                    flag=1
                }
                else if(rom[0]=='O') {
                    c=c+'Ó'
                    flag=1
                }
                else if(rom[0]=='u') {
                    c=c+'ú'
                    flag=1
                }
                else if(rom[0]=='U') {
                    c=c+'Ú'
                    flag=1
                }
                if(flag) {
                    rom=rom.slice(2)
                    flag=0
                    continue
                }
            }
        }
        if(rom[1]=='@') {
            if(rom.length>=2 && rom[2]=='^') {
                if(rom[0]=='a') {
                    c=c+'ą́'
                    flag=1
                }
                else if(rom[0]=='A') {
                    c=c+'Ą́'
                    flag=1
                }
                else if(rom[0]=='e') {
                    c=c+'ę́'
                    flag=1
                }
                else if(rom[0]=='E') {
                    c=c+'Ę́'
                    flag=1
                }
                else if(rom[0]=='i') {
                    c=c+'į́'
                    flag=1
                }
                else if(rom[0]=='I') {
                    c=c+'Į́'
                    flag=1
                }
                else if(rom[0]=='o') {
                    c=c+'ǫ́'
                    flag=1
                }
                else if(rom[0]=='O') {
                    c=c+'Ǫ́'
                    flag=1
                }
                else if(rom[0]=='u') {
                    c=c+'ų́'
                    flag=1
                }
                else if(rom[0]=='U') {
                    c=c+'Ų́'
                    flag=1
                }
                if(flag) {
                    rom=rom.slice(3)
                    flag=0
                    continue
                }
            }
            else {
                if(rom[0]=='a') {
                    c=c+'ą'
                    flag=1
                }
                else if(rom[0]=='A') {
                    c=c+'Ą'
                    flag=1
                }
                else if(rom[0]=='e') {
                    c=c+'ę'
                    flag=1
                }
                else if(rom[0]=='E') {
                    c=c+'Ę'
                    flag=1
                }
                else if(rom[0]=='i') {
                    c=c+'į'
                    flag=1
                }
                else if(rom[0]=='I') {
                    c=c+'Į'
                    flag=1
                }
                else if(rom[0]=='o') {
                    c=c+'ǫ'
                    flag=1
                }
                else if(rom[0]=='O') {
                    c=c+'Ǫ'
                    flag=1
                }
                else if(rom[0]=='u') {
                    c=c+'ų'
                    flag=1
                }
                else if(rom[0]=='U') {
                    c=c+'Ų'
                    flag=1
                }
                if(flag) {
                    rom=rom.slice(2)
                    flag=0
                    continue
                }
            }
        }
        if(rom[1]=='%') {
            if(rom[0]=='a') {
                c=c+'ą́'
                flag=1
            }
            else if(rom[0]=='A') {
                c=c+'Ą́'
                flag=1
            }
            else if(rom[0]=='e') {
                c=c+'ę́'
                flag=1
            }
            else if(rom[0]=='E') {
                c=c+'Ę́'
                flag=1
            }
            else if(rom[0]=='i') {
                c=c+'į́'
                flag=1
            }
            else if(rom[0]=='I') {
                c=c+'Į́'
                flag=1
            }
            else if(rom[0]=='o') {
                c=c+'ǫ́'
                flag=1
            }
            else if(rom[0]=='O') {
                c=c+'Ǫ́'
                flag=1
            }
            else if(rom[0]=='u') {
                c=c+'ų́'
                flag=1
            }
            else if(rom[0]=='U') {
                c=c+'Ų́'
                flag=1
            }
            else if(rom[0]=='l') {
                c=c+'ł'
                flag=1
            }
            else if(rom[0]=='L') {
                c=c+'Ł'
                flag=1
            }
            if(flag) {
                rom=rom.slice(2)
                flag=0
                continue
            }
        }
        if(rom[0]=="'") {
            if(rom[1]!='^') {
                c=c+'’'
                rom=rom.slice(1)
                continue
            }
            if(rom[1]=='^') {
                c=c+'\''
                rom=rom.slice(2)
                continue
            }
        }
        if(rom[0]=='#') {
            break
        }
        c=c+rom[0]
        rom=rom.slice(1)
    }
    return c;
}