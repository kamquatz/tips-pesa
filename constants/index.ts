import { subDays, format, addDays } from 'date-fns';

export const packages = [
    { title: "Daily", duration: "1 Day", matches: 5, price: 49 },
    { title: "Weekly", duration: "7 Days", matches: 50, price: 299 },
    { title: "Monthly", duration: "30 Days", matches: 200, price: 999 }
];

export const matchDays = [
    { title: "All Time", value: "", },
    { title: "Today", value: format(new Date(), 'yyyy-MM-dd') },
    { title: "Yesterday", value: format(subDays(new Date(), 1), 'yyyy-MM-dd') },
    { title: "Tomorrow", value: format(addDays(new Date(), 1), 'yyyy-MM-dd') }
];

export const markets = [
    { title: "All Markets", value: "" },
//     { title: "Home", value: "1" },
//     { title: "Draw", value: "X" },
//     { title: "Away", value: "2" },
//     { title: "Home or Draw", value: "1X" },
//     { title: "Away or Draw", value: "X2" },
//     { title: "Home or Away", value: "12" },
    { title: "Over 0.5", value: "OVER 0.5" },
    { title: "Over 1.5", value: "OVER 1.5" },
    { title: "Over 2.5", value: "OVER 2.5" },
    { title: "Over 3.5", value: "OVER 3.5" },
    // { title: "Under 0.5", value: "UN0.5" },
    // { title: "Under 1.5", value: "UN1.5" },
    // { title: "Under 2.5", value: "UN2.5" },
    // { title: "Under 3.5", value: "UN3.5" },
     { title: "BTTS", value: "GG" },
    // { title: "Both Teams Not To Score", value: "NG" }
];

export const footerLinks = [
    {
        title: "About",
        links: [
            { title: "How it works", url: "/" },
            { title: "Featured", url: "/" },
            { title: "Our Team", url: "/" }
        ],
    },
    {
        title: "Patners",
        links: [
            { title: "Betika", url: "https://www.betika.com/en-ke/" },
            { title: "BetEnsured", url: "https://www.betensured.com/" },
            { title: "FootyStats", url: "https://footystats.org/" }
        ],
    },
    {
        title: "Socials",
        links: [
            { title: "Twitter", url: "https://twitter.com/olemuga" },
            { title: "Facebook", url: "https://web.facebook.com/Tipspesa" },
            { title: "Instagram", url: "/" },
            { title: "Youtube", url: "https://www.youtube.com/@TipsPesa" },
            { title: "Tiktok", url: "/" }
        ],
    },
    {
        title: "Contact Us",
        links: [
            { title: "Phone", url: "tel://+254723111920" },
            { title: "Telegram", url: "https://t.me/+M13BUUVVC8gyNjA0" },
            { title: "Whatsapp", url: "https://wa.me/254759364933" }
        ],
    },
];