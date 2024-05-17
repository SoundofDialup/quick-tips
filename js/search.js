const pages = [
  {
    title: 'WHOIS on linux',
    url: '/tip/linux/whois-on-linux/',
    keywords: ['linux', 'whois', 'install'],
    description: 'Get WHOIS working in Debian/Ubuntu.',
  },
  {
    title: 'Install Node.js, npm, and nvm on Linux',
    url: '/tip/linux/node-npm-nvm-on-linux/',
    keywords: ['linux', 'node', 'nodejs', 'npm', 'install'],
    description:
      'Install Node.js, npm, and nvm (for installing specific node versions) on Linux.',
  },
  {
    title: "Fix for 'No module named tkinter' in VSCodium",
    url: '/tip/linux/no-module-named-tkinter/',
    keywords: ['linux', 'vcodium', 'terminal', 'fix', 'tkinter', 'module'],
    description:
      "Fix for 'No module named tkinter' appearing in VSCodium, despite it being installed.",
  },
  {
    title: 'Screenshot Selection with Key',
    url: '/tip/linux/screen-shot-selection/',
    keywords: ['linux', 'screenshot', 'gnome', 'ubuntu', 'mint'],
    description:
      'Use a custom keybinding to use the screenshot selection tool automatically.',
  },
  {
    title: 'Connect to Home Server Running Fedora Server',
    url: '/tip/linux/connect-to-home-server-running-fedora-server/',
    keywords: ['linux', 'fedora', 'server', 'workstation', 'home', 'ssh'],
    description:
      'How to connect to a home server running Fedora Server, so you can upload/download files.',
  },

  {
    title: 'Install Tailwind CSS',
    url: '/tip/tailwind-css/install-tailwind-css/',
    keywords: ['tailwind', 'css'],
    description: 'Install TailwindCSS in an existing project.',
  },
  {
    title: 'Fix for Tailwind not styling a deployed page',
    url: '/tip/tailwind-css/fix-tailwind-not-styling-page/',
    keywords: ['tailwind', 'css', 'fix'],
    description:
      'When you deploy a website and none of your Tailwind CSS is showing.',
  },

  {
    title: "Fix a USB Drive That Can't be Formatted",
    url: '/tip/windows/cannot-format-usb-drive/',
    keywords: ['windows', 'usb', 'drive', 'format', 'fix'],
    description:
      'When you deploy a website and none of your Tailwind CSS is showing.',
  },
  {
    title: 'Hide the File Path in Powershell',
    url: '/tip/windows/hide-file-path-powershell/',
    keywords: [
      'windows',
      'file',
      'path',
      'powershell',
      'hide',
      'obfuscate',
      'vscode',
      'ide',
      'vscodium',
      'prompt',
    ],
    description:
      'Replace a long file path prompt with a shorter one in Powershell.',
  },
  {
    title: 'Install Windows without an Account',
    url: '/tip/windows/clean-install-windows-without-account/',
    keywords: [
      'windows',
      'account',
      'clean',
      'install',
      'offline',
      'microsoft',
      '10',
      '11',
    ],
    description:
      'Avoid having to make/connect an account when doing a clean install of Windows.',
  },
  {
    title: 'Install PowerToys',
    url: '/tip/windows/install-powertoys/',
    keywords: [
      'windows',
      'powertoys',
      'colour picker',
      'color picker',
      'fancy zones',
      'fancyzones',
    ],
    description:
      'Install PowerToys for the Colour Picker and Fancy Zones (among other things).',
  },
  {
    title: 'Change Git Bash Prompt',
    url: '/tip/windows/change-git-bash-prompt/',
    keywords: ['windows', 'git', 'bash', 'user', 'user@computer', 'prompt'],
    description:
      'Change the git bash prompt from user@computer to something else.',
  },

  {
    title: 'How to Make Favicons',
    url: '/tip/webdev/favicon-maker/',
    keywords: ['webdev', 'favicon', 'development', 'website'],
    description: 'Create favicons for a website.',
  },
  {
    title: 'Add a Custom Domain to GitHub Pages',
    url: '/tip/webdev/github-pages-custom-domain/',
    keywords: ['webdev', 'github', 'development', 'website', 'url'],
    description: 'Replace username.github.io with something like example.com',
  },
];

let searchQuery = '';

function searchPages(query) {
  return pages.filter(
    (page) =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.keywords.some((keyword) =>
        keyword.toLowerCase().includes(query.toLowerCase()),
      ),
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  // Clear the search input on page load
  searchInput.value = '';

  searchInput.addEventListener('input', function (e) {
    searchQuery = e.target.value.toLowerCase();
    const filteredPages = searchPages(searchQuery);
    displayResults(filteredPages);
  });

  searchInput.addEventListener('focus', function () {
    this.value = '';
    searchQuery = '';
    displayResults([]);
  });

  // Hitting the ENTER key takes the user to the first result
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const filteredPages = searchPages(searchQuery);
      if (filteredPages.length > 0) {
        window.location.href = filteredPages[0].url;
      }
      e.preventDefault(); // Prevent the default action to stop the form from submitting
    }
  });
});

function displayResults(results) {
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  if (results.length > 0) {
    results.forEach((page) => {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `<h3><a href="${page.url}" class="text-orange-400">${page.title}</a></h3><p class="mb-4 text-slate-300">${page.description}</p>`;
      resultsContainer.appendChild(resultElement);
    });
  } else if (searchQuery) {
    // Only show "No results found" if there is a search query
    resultsContainer.innerHTML =
      '<p class="text-slate-300">No results found.</p>';
  }
}
