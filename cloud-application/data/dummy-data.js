import Cards from "../model/cards";
import rewardsCard from "../model/rewardsCard";
import { Images } from "../assets/Images";

export const RECEIPTS = [
  {
    id: "r1",
    storeName: "Starbucks",
    timeStamp: "October 5, 1:45 AM",
    amount: "5.95",
    icon: Images.coffeeIcon,
    category: "Cafe",
    storeLogo: Images.starbucks,
    color: "#2F6E46",
    barcode: Images.barcode,
    barcodeNumber: "123456789",
  },
  {
    id: "r2",
    storeName: "Woolworths",
    timeStamp: "October 4, 8:30 AM",
    amount: "22.18",
    icon: Images.shoppingIcon,
    category: "Supermarket",
    storeLogo: Images.woolworths,
    color: "#DF7C38",
    barcode: Images.barcode,
    barcodeNumber: "123456789",
  },
  {
    id: "r3",
    storeName: "Allan Buki Hair Boutique Pty. Ltd",
    timeStamp: "October 3, 9:55 PM",
    amount: "12.50",
    icon: Images.scissorsIcon,
    category: "Barber shop",
    storeLogo: Images.allanBuki,
    color: "white",
    barcode: Images.barcode,
    barcodeNumber: "123456789",
  },
  {
    id: "r4",
    storeName: "Yellow Octopus",
    timeStamp: "October 3, 4:56 PM",
    amount: "27.65",
    icon: Images.giftIcon,
    category: "Gifts",
    storeLogo: Images.yellowOctopus,
    color: "white",
    barcode: Images.barcode,
    barcodeNumber: "123456789",
  },
  //{id: 'r5', storeName:'Starbucks', timeStamp: 'October 5, 1:45 AM', amount: '5.95', icon: Images.coffeeIcon},
  //{id: 'r6', storeName:'Woolworths', timeStamp: 'October 4, 8:30 AM', amount: '22.18', icon: Images.shoppingIcon},
  //{id: 'r7', storeName:'Allan Buki Hair Boutique Pty. Ltd', timeStamp: 'October 3, 9:55 PM', amount: '12.50', icon: Images.scissorsIcon},
  //{id: 'r8', storeName:'Yellow Octopus', timeStamp: 'October 3, 4:56 PM', amount: '27.65', icon: Images.giftIcon}
];

export const CARDS = [
  new Cards(
    "c1",
    Images.woolworths,
    "Woolworths",
    "9361032796271",
    "#DF7C38",
    Images.woolworthsCard,
    Images.woolworthsBarcode
  ),
  new Cards(
    "c2",
    Images.starbucks,
    "Starbucks",
    "60132108713080",
    "#2F6E46",
    Images.starbucksCard,
    Images.starbucksBarcode
  ),
  new Cards(
    "c3",
    Images.flybuys,
    "flybuys",
    "2795068938812",
    "#3C7BC8",
    Images.flybuysCard,
    Images.flybuysBarcode
  ),
  new Cards(
    "c4",
    Images.myer,
    "Myer one",
    "9361032796236",
    "#F3F1F1",
    Images.myerCard,
    Images.myerBarcode
  ),
];

export const REWARDS_CARD = [
  new rewardsCard("rc1", Images.woolworths, "Woolworths", "#DF7C38"),
  new rewardsCard("rc2", Images.starbucks, "Starbucks", "#2F6E46"),
  new rewardsCard("rc3", Images.flybuys, "flybuys", "#3C7BC8"),
  new rewardsCard("rc4", Images.myer, "Myer one", "#F3F1F1"),
];

export const USER = [
  {
    id: "u1",
    name: "Andrew Wong",
    email: "andrew.wong@gmail.com",
    password: "andrew123",
  },
];
