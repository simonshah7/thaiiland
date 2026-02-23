export const TRIP_START = new Date('2026-04-10T00:00:00');

export const DAYS = [
  {
    id: 'day1', day: 'Day 1', date: 'Fri, 10 Apr', title: 'Arrival in Bangkok',
    location: 'Bangkok', weather: '34°C, Sunny & Humid',
    items: [
      { time: 'Afternoon', activity: 'Arrive at Suvarnabhumi Airport, transfer to hotel', cost: '' },
      { time: 'Evening', activity: 'Check in to hotel near Khao San Road', cost: '~฿2,500/night' },
      { time: 'Night', activity: 'Street food tour – Pad Thai, mango sticky rice, Thai iced tea', cost: '~฿300' },
      { time: 'Late Night', activity: 'Walk along the Chao Phraya River', cost: '' },
    ],
    images: [
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400',
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400',
    ],
  },
  {
    id: 'day2', day: 'Day 2', date: 'Sat, 11 Apr', title: 'Bangkok Temples & Culture',
    location: 'Bangkok', weather: '35°C, Partly Cloudy',
    items: [
      { time: 'Morning', activity: 'Grand Palace & Wat Phra Kaew (Temple of the Emerald Buddha)', cost: '฿500 entry' },
      { time: 'Midday', activity: 'Wat Pho – the Reclining Buddha & traditional Thai massage', cost: '฿300 entry + ฿400 massage' },
      { time: 'Afternoon', activity: 'Lunch at Thip Samai (famous Pad Thai)', cost: '~฿200' },
      { time: 'Evening', activity: 'Wat Arun at sunset – cross the river by ferry', cost: '฿100 entry' },
      { time: 'Night', activity: 'Rooftop dinner & drinks at a sky bar', cost: '~฿2,000' },
    ],
    images: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400',
    ],
  },
  {
    id: 'day3', day: 'Day 3', date: 'Sun, 12 Apr', title: 'Songkran Festival – Water Festival!',
    location: 'Bangkok', weather: '35°C, Hot & Festive',
    items: [
      { time: 'All Day', activity: "Songkran Water Festival – Thailand's New Year celebration!", cost: '' },
      { time: 'Morning', activity: 'Buy water guns & waterproof bags at MBK Center', cost: '~฿500' },
      { time: 'Afternoon', activity: 'Water fight at Silom Road – the biggest Songkran party in Bangkok', cost: '' },
      { time: 'Evening', activity: 'Traditional Songkran ceremony at a temple – water blessings', cost: '' },
      { time: 'Night', activity: 'Night market food crawl at Jodd Fairs', cost: '~฿500' },
    ],
    images: [
      'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=400',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400',
    ],
  },
  {
    id: 'day4', day: 'Day 4', date: 'Mon, 13 Apr', title: 'Floating Markets & Local Life',
    location: 'Bangkok', weather: '34°C, Humid',
    items: [
      { time: 'Early Morning', activity: 'Damnoen Saduak Floating Market (1.5hr drive)', cost: '~฿1,500 tour' },
      { time: 'Midday', activity: 'Boat ride through the canals & market shopping', cost: '~฿300' },
      { time: 'Afternoon', activity: 'Chatuchak Weekend Market – huge open-air market', cost: '~฿500 shopping' },
      { time: 'Evening', activity: 'Thai cooking class – learn green curry & tom yum', cost: '~฿1,500' },
      { time: 'Night', activity: 'Pack for Chiang Mai, early flight tomorrow', cost: '' },
    ],
    images: [
      'https://images.unsplash.com/photo-1573650450328-1e4afec2ecd7?w=400',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=400',
    ],
  },
  {
    id: 'day5', day: 'Day 5', date: 'Tue, 14 Apr', title: 'Fly to Chiang Mai',
    location: 'Chiang Mai', weather: '33°C, Warm & Clear',
    items: [
      { time: 'Morning', activity: 'Fly Bangkok → Chiang Mai (1hr flight)', cost: '~฿2,000 pp' },
      { time: 'Midday', activity: 'Check into boutique hotel in Old City', cost: '~฿2,000/night' },
      { time: 'Afternoon', activity: 'Explore the Old City temples – Wat Chedi Luang, Wat Phra Singh', cost: '~฿100' },
      { time: 'Evening', activity: 'Khao Soi (coconut curry noodles) at a local favourite', cost: '~฿150' },
      { time: 'Night', activity: 'Night Bazaar – crafts, souvenirs, street food', cost: '~฿500' },
    ],
    images: [
      'https://images.unsplash.com/photo-1599647066579-747e25f548f1?w=400',
      'https://images.unsplash.com/photo-1512553785966-2916b5b046?w=400',
    ],
  },
  {
    id: 'day6', day: 'Day 6', date: 'Wed, 15 Apr', title: 'Elephants & Jungle',
    location: 'Chiang Mai', weather: '32°C, Partly Cloudy',
    items: [
      { time: 'Morning', activity: 'Ethical elephant sanctuary visit – feed & walk with elephants', cost: '~฿2,500 pp' },
      { time: 'Afternoon', activity: 'Bamboo rafting through the jungle', cost: 'Included' },
      { time: 'Late Afternoon', activity: 'Doi Suthep temple – panoramic views of Chiang Mai', cost: '฿50 entry' },
      { time: 'Evening', activity: 'Anniversary dinner – upscale Northern Thai cuisine', cost: '~฿3,000' },
      { time: 'Night', activity: 'Couples spa treatment – herbal compress massage', cost: '~฿2,000' },
    ],
    images: [
      'https://images.unsplash.com/photo-1516382799247-87df95d790b7?w=400',
      'https://images.unsplash.com/photo-1558431382-27e303142255?w=400',
    ],
  },
  {
    id: 'day7', day: 'Day 7', date: 'Thu, 16 Apr', title: 'Travel to Krabi',
    location: 'Krabi', weather: '31°C, Tropical & Warm',
    items: [
      { time: 'Morning', activity: 'Fly Chiang Mai → Krabi (with connection)', cost: '~฿3,000 pp' },
      { time: 'Afternoon', activity: 'Check into beachfront resort at Ao Nang', cost: '~฿3,500/night' },
      { time: 'Late Afternoon', activity: 'Relax on Ao Nang Beach', cost: '' },
      { time: 'Evening', activity: 'Seafood BBQ dinner on the beach', cost: '~฿1,000' },
      { time: 'Night', activity: 'Beach bar cocktails with live music', cost: '~฿500' },
    ],
    images: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400',
      'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400',
    ],
  },
  {
    id: 'day8', day: 'Day 8', date: 'Fri, 17 Apr', title: 'Island Hopping – 4 Islands Tour',
    location: 'Krabi', weather: '31°C, Sunny',
    items: [
      { time: 'Morning', activity: 'Four Islands tour by longtail boat', cost: '~฿1,500 pp' },
      { time: 'Mid-Morning', activity: 'Snorkel at Koh Poda – crystal clear water', cost: 'Included' },
      { time: 'Midday', activity: 'Beach lunch on Tup Island (the sandbar)', cost: 'Included' },
      { time: 'Afternoon', activity: 'Explore Phra Nang Cave Beach & swim at Chicken Island', cost: '' },
      { time: 'Evening', activity: 'Sunset kayaking at Railay Beach', cost: '~฿800' },
      { time: 'Night', activity: 'Night market dinner at Krabi Town', cost: '~฿400' },
    ],
    images: [
      'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=400',
      'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=400',
    ],
  },
  {
    id: 'day9', day: 'Day 9', date: 'Sat, 18 Apr', title: 'Relaxation & Adventure',
    location: 'Krabi', weather: '32°C, Mostly Sunny',
    items: [
      { time: 'Morning', activity: 'Emerald Pool & Hot Springs – swim in natural pools', cost: '฿200 entry' },
      { time: 'Midday', activity: 'Tiger Cave Temple – 1,260 steps to the summit!', cost: '' },
      { time: 'Afternoon', activity: 'Spa afternoon – full body Thai massage', cost: '~฿1,500' },
      { time: 'Evening', activity: 'Final anniversary dinner – cliffside restaurant overlooking the sea', cost: '~฿3,000' },
      { time: 'Night', activity: 'Lantern release on the beach', cost: '~฿200' },
    ],
    images: [
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?w=400',
      'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=400',
    ],
  },
  {
    id: 'day10', day: 'Day 10', date: 'Sun, 19 Apr', title: 'Departure Day',
    location: 'Krabi → Home', weather: '31°C, Clear',
    items: [
      { time: 'Morning', activity: 'Last breakfast by the beach & morning swim', cost: '' },
      { time: 'Midday', activity: 'Last-minute souvenir shopping at Ao Nang', cost: '~฿1,000' },
      { time: 'Afternoon', activity: 'Transfer to Krabi Airport', cost: '~฿500' },
      { time: 'Evening', activity: 'Fly home – full of memories!', cost: '' },
    ],
    images: [
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=400',
    ],
  },
];

export const BUDGET = [
  { cat: 'Flights', detail: 'Return flights + domestic flights', cost: '~฿25,000 pp' },
  { cat: 'Hotels', detail: 'Bangkok (4n) + Chiang Mai (2n) + Krabi (3n)', cost: '~฿25,000 total' },
  { cat: 'Food & Drink', detail: 'Street food, restaurants, sky bars', cost: '~฿15,000' },
  { cat: 'Activities', detail: 'Tours, temples, elephant sanctuary, cooking class', cost: '~฿15,000' },
  { cat: 'Transport', detail: 'Taxis, boats, tuk-tuks, ferries', cost: '~฿5,000' },
  { cat: 'Shopping', detail: 'Markets, souvenirs, Songkran gear', cost: '~฿5,000' },
  { cat: 'Spa & Wellness', detail: 'Massages, spa treatments', cost: '~฿5,000' },
  { cat: 'Misc & Buffer', detail: 'Tips, SIM card, insurance, emergencies', cost: '~฿5,000' },
];

export const CHECKLIST_ITEMS = [
  'Book flights',
  'Book hotels/resorts',
  'Apply for travel insurance',
  'Check passport expiry (6+ months)',
  'Pack lightweight & waterproof clothes',
  'Download offline maps (Google Maps / Maps.me)',
  'Get Thai Baht (or use Wise card)',
  'Buy waterproof phone pouch for Songkran',
  'Pack reef-safe sunscreen & mosquito repellent',
  'Book elephant sanctuary in advance',
  'Notify bank of travel dates',
  'Pack power adapter (Type A/B/C for Thailand)',
  'Download Grab app (Thai Uber)',
  'Book airport transfer',
  'Print or save hotel confirmations',
  'Pack small daypack for island tours',
];
