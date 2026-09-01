import { createSignal } from "solid-js";

export const [portfolioInfo, SetPortfolioInfo] = createSignal({
  name: "Rakesh",
  role: "Developer",
  dp: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2UbLKuD27Cax_yJtLD0FZsMafR-aU3SHJKDoHVirS-G6ijqJoOqqX3K-30JS4aN3cnj-dNJl0M_nJP0TGlbJnoyFSQBVJZztsthCBDch_zmoxZdbtrJp-maHycytIdtXvQozlW7sojgSs2cA0waXyqYEwBPqgHmnbw7PCJa5BvItNpulaztpf20rnh4OMkt79-YqQW6VYAuNKSihR7FbOLqFFafr8r8TQ1E6XBgXfGwN7boiWsaY",
  uptime: "99.98",
  energy_level: "MAX",
  bio: {
    part_1:
      "Highly optimized carbon-based intelligence specializing in full-stack architecture, legacy mainframe modernization, and hyper-scalable digital ecosystems. Proficient in translating raw caffeine input into rigorous logic models and high-performance user interfaces.",
    part_2:
      "Operating natively in terminal environments since epoch zero. Obsessed with high-contrast aesthetics, minimalist architecture, and the raw power of unstyled data streams.",
  },
});



export const [skills,SetSkills] = createSignal({
  "FRONTEND_SYS": [
    {
      "name": "React",
      "desc": "A JavaScript library for building component-based user interfaces.",
      "url": "https://react.dev/"
    },
    {
      "name": "Preact",
      "desc": "A fast 3kB alternative to React with the same modern API.",
      "url": "https://preactjs.com/"
    },
    {
      "name": "SolidJS",
      "desc": "A declarative, efficient, and flexible JavaScript library for building UIs without a Virtual DOM.",
      "url": "https://www.solidjs.com/"
    },
    {
      "name": "Tailwind CSS",
      "desc": "A utility-first CSS framework for rapid UI development.",
      "url": "https://tailwindcss.com/"
    },
    {
      "name": "GSAP",
      "desc": "A robust JavaScript toolset that turns developers into animation superheroes.",
      "url": "https://gsap.com/"
    },
    {
      "name": "Zustand",
      "desc": "A small, fast, and scalable bearbones state-management solution.",
      "url": "https://zustand-demo.pmnd.rs/"
    },
    {
      "name": "Redux",
      "desc": "A predictable state container for JavaScript apps.",
      "url": "https://redux.js.org/"
    },
    {
      "name": "Browser Extensions",
      "desc": "Custom modules to extend web browser capabilities.",
      "url": "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions"
    },
    {
      "name": "SEO",
      "desc": "Search Engine Optimization techniques for improving site visibility.",
      "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
    },
    {
      "name": "AdSense",
      "desc": "Google's program for serving interactive media advertisements on websites.",
      "url": "https://adsense.google.com/"
    }
  ],
  "BACKEND_CORE": [
    {
      "name": "Node.js",
      "desc": "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
      "url": "https://nodejs.org/"
    },
    {
      "name": "Express.js",
      "desc": "A fast, unopinionated, minimalist web framework for Node.js.",
      "url": "https://expressjs.com/"
    },
    {
      "name": "FastAPI",
      "desc": "A high-performance web framework for building APIs with Python.",
      "url": "https://fastapi.tiangolo.com/"
    },
    {
      "name": "MongoDB",
      "desc": "A document-based, distributed database built for modern application developers.",
      "url": "https://www.mongodb.com/"
    },
    {
      "name": "Redis",
      "desc": "An open source, in-memory data structure store used as a database and cache.",
      "url": "https://redis.io/"
    },
    {
      "name": "Valkey",
      "desc": "An open source, high-performance key-value data store (Redis fork).",
      "url": "https://valkey.io/"
    },
    {
      "name": "In-Memory DB",
      "desc": "Database management systems that rely on main memory for extremely fast data storage.",
      "url": "https://en.wikipedia.org/wiki/In-memory_database"
    },
    {
      "name": "Data Validation",
      "desc": "The process of ensuring data accuracy and quality before processing.",
      "url": "https://en.wikipedia.org/wiki/Data_validation"
    }
  ],
  "SEC_&_AUTH": [
    {
      "name": "OAuth",
      "desc": "An open standard for access delegation and secure authorization.",
      "url": "https://oauth.net/"
    },
    {
      "name": "JWT",
      "desc": "JSON Web Tokens, a standard for securely transmitting information as a JSON object.",
      "url": "https://jwt.io/"
    },
    {
      "name": "Google Auth",
      "desc": "Authentication services provided by Google using OAuth 2.0.",
      "url": "https://developers.google.com/identity"
    },
    {
      "name": "GitHub Auth",
      "desc": "Authentication and authorization via GitHub's OAuth app system.",
      "url": "https://docs.github.com/en/apps/oauth-apps"
    },
    {
      "name": "TOTP",
      "desc": "Time-based One-Time Password algorithm for two-factor authentication.",
      "url": "https://en.wikipedia.org/wiki/Time-based_One-Time_Password"
    },
    {
      "name": "Firewall",
      "desc": "A network security system that monitors and controls network traffic.",
      "url": "https://en.wikipedia.org/wiki/Firewall_(computing)"
    }
  ],
  "API_INTEGRATIONS": [
    {
      "name": "AI APIs",
      "desc": "Application Programming Interfaces for integrating artificial intelligence models.",
      "url": "https://en.wikipedia.org/wiki/Artificial_intelligence"
    },
    {
      "name": "AI Chatbots",
      "desc": "Automated conversational agents powered by AI models.",
      "url": "https://en.wikipedia.org/wiki/Chatbot"
    },
    {
      "name": "Discord Bots",
      "desc": "Automated agents that perform tasks and interact with users on Discord servers.",
      "url": "https://discord.com/developers/docs/intro"
    },
    {
      "name": "Email API",
      "desc": "Programmatic interfaces for sending, receiving, and managing transactional emails.",
      "url": "https://en.wikipedia.org/wiki/Email_API"
    },
    {
      "name": "WhatsApp API",
      "desc": "Official API for integrating WhatsApp messaging into business applications.",
      "url": "https://business.whatsapp.com/developers/developer-hub"
    },
    {
      "name": "Meta Business API",
      "desc": "Interfaces for managing marketing, messaging, and data across Meta's platforms.",
      "url": "https://developers.facebook.com/docs/business-apis/"
    },
    {
      "name": "Payment Gateways",
      "desc": "E-commerce services that process online transactions securely.",
      "url": "https://en.wikipedia.org/wiki/Payment_gateway"
    },
    {
      "name": "Courier Aggregators",
      "desc": "APIs for multi-carrier shipping and logistics management.",
      "url": "https://en.wikipedia.org/wiki/Courier"
    },
    {
      "name": "ImageKit.io",
      "desc": "Real-time image optimization, resizing, and media storage API.",
      "url": "https://imagekit.io/"
    }
  ],
  "CLOUD_&_OPS": [
    {
      "name": "AWS",
      "desc": "Amazon Web Services, a comprehensive cloud computing platform.",
      "url": "https://aws.amazon.com/"
    },
    {
      "name": "GCP",
      "desc": "Google Cloud Platform, a suite of cloud computing services.",
      "url": "https://cloud.google.com/"
    },
    {
      "name": "Vercel",
      "desc": "A cloud platform for static sites and Serverless Functions.",
      "url": "https://vercel.com/"
    },
    {
      "name": "Linux",
      "desc": "An open-source Unix-like operating system kernel and environment.",
      "url": "https://www.linux.org/"
    },
    {
      "name": "Nginx",
      "desc": "A high-performance web server, reverse proxy, and load balancer.",
      "url": "https://nginx.org/"
    },
    {
      "name": "Caddy",
      "desc": "An extensible, enterprise-grade open-source web server with automatic HTTPS.",
      "url": "https://caddyserver.com/"
    },
    {
      "name": "DNS",
      "desc": "Domain Name System, the hierarchical naming system for the internet.",
      "url": "https://en.wikipedia.org/wiki/Domain_Name_System"
    },
    {
      "name": "Git",
      "desc": "A distributed version control system for tracking changes in source code.",
      "url": "https://git-scm.com/"
    },
    {
      "name": "GitHub",
      "desc": "Internet hosting service for software development and version control using Git.",
      "url": "https://github.com/"
    },
    {
      "name": "Lazygit",
      "desc": "A simple terminal UI for executing git commands efficiently.",
      "url": "https://github.com/jesseduffield/lazygit"
    },
    {
      "name": "GitHub Actions",
      "desc": "A CI/CD platform that allows automating build, test, and deployment pipelines.",
      "url": "https://github.com/features/actions"
    }
  ],
  "IOT_&_EDGE": [
    {
      "name": "MicroPython",
      "desc": "A lean and efficient implementation of the Python 3 programming language for microcontrollers.",
      "url": "https://micropython.org/"
    },
    {
      "name": "ESP",
      "desc": "Low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and Bluetooth.",
      "url": "https://www.espressif.com/"
    },
    {
      "name": "Raspberry Pi",
      "desc": "A series of small single-board computers for learning basic computer science and prototyping.",
      "url": "https://www.raspberrypi.org/"
    },
    {
      "name": "Analog Sensors",
      "desc": "Hardware components that read and output continuous variable physical quantities.",
      "url": "https://en.wikipedia.org/wiki/Sensor"
    },
    {
      "name": "Digital Sensors",
      "desc": "Electronic sensors where data conversion and transmission take place digitally.",
      "url": "https://en.wikipedia.org/wiki/Sensor"
    }
  ],
  "SYS_TOOLS": [
    {
      "name": "CLI Applications",
      "desc": "Command-Line Interface programs operated via terminal text commands.",
      "url": "https://en.wikipedia.org/wiki/Command-line_interface"
    },
    {
      "name": "TUI Applications",
      "desc": "Text-based User Interface applications running in terminal environments.",
      "url": "https://en.wikipedia.org/wiki/Text-based_user_interface"
    },
    {
      "name": "Postman",
      "desc": "An API platform for building, testing, and managing APIs.",
      "url": "https://www.postman.com/"
    },
    {
      "name": "Hoppscotch",
      "desc": "A lightweight, web-based, open-source API development ecosystem.",
      "url": "https://hoppscotch.io/"
    },
    {
      "name": "Bruno",
      "desc": "An open-source IDE for exploring and testing APIs using plain text files.",
      "url": "https://www.usebruno.com/"
    },
    {
      "name": "Insomnia",
      "desc": "An open-source, cross-platform API client for GraphQL, REST, WebSockets, and gRPC.",
      "url": "https://insomnia.rest/"
    }
  ]
})









