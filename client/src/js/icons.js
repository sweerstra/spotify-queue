import { h } from 'hyperapp';

export const SearchIcon = ({ onclick }) => (
  <svg onclick={onclick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       class="feather feather-search" color="#384047">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

export const ClockIcon = ({ title }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       class="feather feather-clock" color="#384047">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
    <title>{title}</title>
  </svg>
);

export const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"
       color="#384047">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

export const PlayIcon = ({ className, onclick }) => (
  <svg onclick={onclick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
       stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class={`feather feather-play ${className}`}
       color="#384047">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

export const GithubIcon = () => (
  <svg class="feather feather-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true" data-reactid="596">
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    <title>View GitHub Source</title>
  </svg>
);

export const RemoveIcon = ({ onclick }) => (
  <svg onclick={onclick} class="feather feather-x" xmlns="http://www.w3.org/2000/svg" width="30"
       height="30"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const ColorPickerIcon = ({ className, onclick }) => (
  <svg onclick={onclick} version="1.1" class={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32"
       height="32" viewBox="0 0 480 480" enable-background="new 0 0 480 480">
    <g id="cuts">
      <path fill="#900C3F" d="M70.298,70.291l84.853,84.853c14.673-14.672,33.132-25.554,53.78-31.074L177.867,8.138
		C136.565,19.179,99.646,40.944,70.298,70.291z"/>
      <path fill="#FF5733" d="M271.068,124.07c20.65,5.52,39.107,16.402,53.781,31.074l84.854-84.853
		c-29.348-29.347-66.268-51.113-107.57-62.153L271.068,124.07z"/>
      <path fill="#3D3D6B" d="M119.999,240c0-10.742,1.42-21.151,4.068-31.059L8.136,177.877C2.839,197.694-0.001,218.514-0.001,240
		s2.84,42.307,8.137,62.123l115.932-31.063C121.419,261.151,119.999,250.742,119.999,240z"/>
      <path fill="#FFC300" d="M360,240c0,10.742-1.42,21.151-4.066,31.059l115.932,31.064C477.16,282.307,480,261.486,480,240
		s-2.84-42.306-8.135-62.123l-115.932,31.063C358.58,218.849,360,229.258,360,240z"/>
      <path fill="#511849" d="M124.069,208.931c5.52-20.649,16.402-39.107,31.074-53.78L70.29,70.298
		c-29.346,29.348-51.111,66.268-62.152,107.57L124.069,208.931z"/>
      <path fill="#FF8D1A" d="M409.709,70.297l-84.852,84.853c14.672,14.673,25.553,33.132,31.072,53.781l115.932-31.063
		C460.822,136.565,439.057,99.646,409.709,70.297z"/>
      <path fill="#2A7B9B" d="M155.144,324.849c-14.672-14.673-25.555-33.131-31.074-53.78L8.138,302.133
		c11.041,41.302,32.807,78.221,62.152,107.569L155.144,324.849z"/>
      <path fill="#C70039" d="M208.94,124.067c9.908-2.648,20.316-4.067,31.059-4.067c10.743,0,21.153,1.419,31.06,4.067L302.123,8.136
		C282.307,2.839,261.486,0,239.999,0c-21.486,0-42.306,2.84-62.122,8.136L208.94,124.067z"/>
      <path fill="#57C785" d="M271.059,355.933c-9.906,2.647-20.316,4.067-31.06,4.067c-10.742,0-21.15-1.42-31.059-4.067
		l-31.063,115.932c19.816,5.296,40.636,8.136,62.122,8.136c21.487,0,42.308-2.84,62.124-8.136L271.059,355.933z"/>
      <path fill="#EDDD53" d="M355.93,271.068c-5.52,20.649-16.4,39.107-31.072,53.781l84.852,84.853
		c29.348-29.349,51.113-66.268,62.152-107.569L355.93,271.068z"/>
      <path fill="#00BAAD" d="M208.931,355.93c-20.648-5.52-39.107-16.401-53.78-31.073l-84.853,84.853
		c29.348,29.347,66.268,51.112,107.569,62.152L208.931,355.93z"/>
      <path fill="#ADD45C" d="M409.703,409.709l-84.854-84.853c-14.674,14.672-33.131,25.554-53.781,31.073l31.064,115.932
		C343.436,460.821,380.355,439.056,409.703,409.709z"/>
    </g>
  </svg>
);

export const EditIcon = ({}) => (
  <svg class="feather feather-edit" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"/>
  </svg>
);

export const ShuffleIcon = ({}) => (
  <svg class="feather feather-shuffle" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <polyline points="16 3 21 3 21 8"/>
    <line x1="4" y1="20" x2="21" y2="3"/>
    <polyline points="21 16 21 21 16 21"/>
    <line x1="15" y1="15" x2="21" y2="21"/>
    <line x1="4" y1="4" x2="9" y2="9"/>
  </svg>
);
