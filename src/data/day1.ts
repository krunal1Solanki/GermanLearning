export type contentItem = {
  german: string;
  english: string;
  notes?: string;
};

export type AlphabetItem = {
  letter: string;
  pronunciation: string;
};

export const day1Data = {
  greetings: [
    { german: "Hallo", english: "Hello (informal)" },
    { german: "Guten Tag", english: "Hello (formal)" },
    { german: "Guten Morgen", english: "Good morning" },
    { german: "Guten Abend", english: "Good evening" },
    { german: "Guten Nacht", english: "Good night" },
    { german: "Auf Wiedersehen", english: "Good bye (formal)" },
    { german: "Tschüs", english: "Bye (informal)" },
  ],
  sein: [
    { german: "Ich bin", english: "I am", notes: "Ich bin hiral" },
    { german: "Du bist", english: "You are", notes: "Du bist Krunal" },
    { german: "Er ist", english: "He is", notes: "Er ist krunal" },
    { german: "Sie ist", english: "She is", notes: "Sie is Hiral" },
    { german: "Es ist", english: "It is", notes: "Es ist flopsy" },
    { german: "Wir sind", english: "We are", notes: "Wir sind Sarah und Tom" },
    { german: "Sie sind", english: "You are (formal)", notes: "Sie sind (formal)" },
    { german: "Ihr seid", english: "You are (plural)", notes: "Ihr seid Alex und Bridget" },
    { german: "Sie sind", english: "They are", notes: "Sie sind Fiona und Caroline" },
  ],
  alphabets: [
    { letter: "A", pronunciation: "aa (aa)" },
    { letter: "B", pronunciation: "beh (be)" },
    { letter: "C", pronunciation: "say (se)" },
    { letter: "D", pronunciation: "dey (de)" },
    { letter: "E", pronunciation: "eee (a)" },
    { letter: "F", pronunciation: "f (f)" },
    { letter: "G", pronunciation: "geh (J)" },
    { letter: "H", pronunciation: "ha (ha)" },
    { letter: "I", pronunciation: "ee (e)" },
    { letter: "J", pronunciation: "Yot" },
    { letter: "K", pronunciation: "ka" },
    { letter: "L", pronunciation: "L" },
    { letter: "M", pronunciation: "M" },
    { letter: "N", pronunciation: "N" },
    { letter: "O", pronunciation: "o" },
    { letter: "P", pronunciation: "Pay" },
    { letter: "Q", pronunciation: "ku" },
    { letter: "R", pronunciation: "er" },
    { letter: "S", pronunciation: "s" },
    { letter: "T", pronunciation: "tay" },
    { letter: "U", pronunciation: "uu" },
    { letter: "V", pronunciation: "fau (faoo)" },
    { letter: "W", pronunciation: "way" },
    { letter: "X", pronunciation: "ixs" },
    { letter: "Y", pronunciation: "Ipsilon" },
    { letter: "Z", pronunciation: "tsett (set)" },
  ],
  phrases: [
    { german: "Wie schreibt man Sarah?", english: "How do you write Sarah?", notes: "Das schreibt man S-A-R-A-H. - You write it S-A-R-A-H." },
    { german: "Wie geht's?", english: "How are you feeling? (informal)" },
    { german: "Wie geht es dir?", english: "How are you feeling? (informal)" },
    { german: "Wie geht es Ihnen?", english: "How are you feeling? (formal)" },
    { german: "Mir geht's gut.", english: "I'm feeling good." },
    { german: "Mir geht's super.", english: "I'm feeling super." },
    { german: "Mir geht's nicht gut.", english: "I'm not feeling good." },
    { german: "Mir geht's schlecht", english: "I'm feeling bad." },
    { german: "Ja", english: "Yes" },
    { german: "Nein", english: "No" },
    { german: "Nicht", english: "Not" },
    { german: "Bitte", english: "Please" },
    { german: "Danke", english: "Thank you" },
    { german: "Noch einmal bitte!", english: "Again, please!" },
    { german: "Ich verstehe nicht.", english: "I don't understand." },
    { german: "Ich weiß nicht.", english: "I don't know." },
  ]
};
