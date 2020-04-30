# bf4-stats-next-unlocks-scraper

A command line tool to show your next Battlefield 4 weapon attachment unlocks.

```
> npm start

Updating...
Done! Mangling data...

Kills needed - Weapon, Category (Current kills, needed kills)

1 - JNG-90, Sniper Rifles (439/440)
2 - MK11-MOD-0, DMRs (258/260)
3 - M412-REX, Handguns (37/40)
4 - UNICA-6, Handguns (66/70)
5 - ACE-21-CQB, Carbines (65/70)
5 - MARE-S-LEG, Handguns (5/10)
5 - SR-2, PDWs (105/110)
5 - AKU-12, Carbines (505/510)
6 - AS-VAL, PDWs (44/50)
6 - RFB, DMRs (104/110)
6 - SW40, Handguns (44/50)
7 - SKS, DMRs (403/410)
8 - SPAS-12, Shotguns (152/160)
9 - TYPE-95B-1, Carbines (131/140)
9 - JS2, PDWs (51/60)
```

## Why?

Because BF4's own suggestions for next unlocks seem to be suggested by % completed instead of the absolute amount of kills. This means that an unlock where you need 50 kills is suggested before an unlock where you need 1 kill.

BF4DB or some other stat service used to show these stats, but not anymore.

## Usage

1. Clone or download this repository
2. Install [Node.js](https://nodejs.org/en/)
3. Open up a terminal/command prompt and navigate to the directory you just cloned or downloaded
    * You should be in the same directory as the `package.json` file
4. Run `npm install`
    * This installs the dependencies
5. Get your BF4 ID
    * Sign in to [Battlelog](https://battlelog.battlefield.com/bf4/) and go to your soldier's overview or stats page
    * The ID is the number in the URL bar
      ![](https://github.com/cxcorp/bf4-stats-next-unlocks-scraper/raw/master/battlelog_uid.png)
6. Open `src/config.js` and replace the number in there with the ID from the previous step
    * ![](https://github.com/cxcorp/bf4-stats-next-unlocks-scraper/raw/master/tool_id_file.png)
7. Run `npm start`

### Showing more than 10 next unlocks

The tool, by default, shows the next 10 unlocks for you to grind. You can pass a number as an argument to the script to control how many are shown. For example, to show the next 50:

```
> npm start 50
```

## License
MIT License
