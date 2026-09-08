const SOJ = 'https://www.sonofjohnlabel.com/products/3-pack-i-everyday-office';

export default {
  slug: 'what-she-notices',
  partner: true,
  featured: true,
  kicker: 'The list',
  title: 'This Is What a Woman Notices First',
  dek: "Five small things people notice before you've said a word. None of them cost much.",
  description:
    'Five things worth getting right before a first date: your smile, what you wear underneath, how you smell, clean shoes, and how you stand.',
  author: 'The Confident Masculinity Team',
  date: '2026-09-07',
  dateLabel: '7 September 2026',
  readingTime: '3 min read',
  hero: null,

  blocks: [
    { type: 'p', html: `Most advice about first impressions is too much work. Get a new job. Get a new face. Be someone else by Friday. Forget it. The things people notice first are small, cheap and easy to fix. Sort them once and you stop thinking about them. Here are five.` },

    {
      type: 'trend',
      num: '1',
      h2: 'Your smile',
      img: '/images/smile.jpg',
      alt: 'Man laughing mid-conversation at a bar',
      text: `This is not about whitening strips. It is about whether your smile looks real. One that just happens says you are relaxed. One you put on says you are not. Relaxed is the most attractive thing on this list. If yours feels stiff, the fix is usually getting there early enough to settle. Not the dentist.`,
    },

    {
      type: 'trend',
      num: '2',
      h2: 'What you have on underneath',
      img: '/images/boxers.jpg',
      alt: 'Couple laughing in a bathroom, the man in striped woven boxer shorts',
      text: `Women think about what they wear underneath. They pick it. Most men wear whatever came out of the wash. Nobody is checking on a first date. But if you got dressed properly all the way down, you carry yourself differently. Loose woven boxers beat tight trunks. They are more comfortable and they look more grown up. The best ones we found are from <a href="${SOJ}" rel="sponsored noopener"><strong>Son of John</strong></a>. They are made from shirt fabric, so they are thin but strong, they come in their own patterns, and they have a warranty. Small change, and you feel it all day.`,
    },

    {
      type: 'trend',
      num: '3',
      h2: 'The way you smell',
      img: '/images/scent.jpg',
      alt: 'Man applying fragrance to his neck at a bathroom mirror',
      text: `Almost everyone uses too much. Two sprays, on your skin, not on your shirt. If people can smell you from across the room, it is too much. A shower and clean clothes do most of the work anyway. Scent is the finishing touch, not the main thing.`,
    },

    {
      type: 'trend',
      num: '4',
      h2: 'Clean shoes',
      img: '/images/shoes.jpg',
      alt: 'Clean suede trainers stepping out of a car',
      text: `Nobody is checking what your shoes cost. They are checking whether they are clean. It is the smallest thing here and it does the most. Clean shoes show you care about the little details, and that lifts your whole look. Worn but looked after is fine. Expensive and dirty is not. Five minutes with a brush beats buying a new pair.`,
    },

    {
      type: 'trend',
      num: '5',
      h2: 'How you stand',
      img: '/images/posture.jpg',
      alt: 'Man standing relaxed against a bar, mid-conversation',
      text: `Chest out and shoulders back looks like effort. What works is being still. Weight settled, shoulders down, hands quiet. Most of us fidget when we are nervous, and you can practise stopping anywhere. Stand still. Take your time answering. Let the pause sit there. It changes how you come across more than anything you say.`,
    },

    { type: 'entry', num: 'The point', h2: 'It reads as care, not money' },
    { type: 'p', html: `None of these five cost much. They are all about whether you bothered. That is what comes across in the first minute, and it is the part you fully control.` },

    { type: 'p', html: `Start with number two. It is the easiest one to fix. The boxers are from <a href="${SOJ}" rel="sponsored noopener">Son of John</a>, who ship worldwide.` },
  ],
};
