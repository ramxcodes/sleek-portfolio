import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';


export const devices = [
  {
    name: 'MacBook Pro 16" M4 46GB 512GB',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'LG Ultragear 27GN650 (27 inch, 68.5 cm)',
    icon: <Monitor className="size-4" />,
  },
  {
    name: 'Cosmic Byte firefly Mechanical Keyboard',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Ideapad Gaming Mouse',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'Crossbeats Roar 2.0 (Special Addition)',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Samsung S23 (256 GB)',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'Unhook', href: 'https://unhook.app/' },
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Wappalyzer', href: 'https://www.wappalyzer.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
];

export const software = [
  { name: 'Dia', href: 'https://www.diabrowser.com/' },
  { name: 'Zen Browser', href: 'https://zen-browser.app/' },
  { name: 'Discord', href: 'https://discord.com/download' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'TickTick', href: 'https://ticktick.com/download' },
  {
    name: 'Microsoft Power Toys',
    href: 'https://www.microsoft.com/en-us/p/powertoys/9nblggh4nqj3?activetab=pivot:overviewtab',
  },
  { name: 'GitHub Desktop', href: 'https://desktop.github.com/' },
  {
    name: 'Free Download Manager',
    href: 'https://www.freedownloadmanager.org/',
  },
  { name: 'OBS Studio', href: 'https://obsproject.com/' },
  {
    name: 'NVIDIA Broadcast',
    href: 'https://www.nvidia.com/en-us/geforce/geforce-experience/broadcast/',
  },
  { name: 'VLC', href: 'https://www.videolan.org/vlc/' },
];
