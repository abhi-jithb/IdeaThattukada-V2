# WXT + React

This template should help get you started developing with React in WXT.

Final Architecture

IdeaThattukada-V2/
│
├── .output/                  # Generated extension build (DO NOT EDIT)
├── .wxt/                     # WXT generated files
│
├── assets/                   # Static development assets
│   └── react.svg
│
├── public/                   # Public static files copied directly
│   └── icon/
│       ├── 16.png
│       ├── 32.png
│       ├── 48.png
│       ├── 96.png
│       └── 128.png
│
├── entrypoints/              # Browser extension entrypoints
│
│   ├── popup/                # Extension popup UI
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.html
│   │   ├── main.tsx
│   │   └── style.css
│   │
│   ├── sidepanel/            # Future main notebook workspace
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.html
│   │   ├── main.tsx
│   │   └── style.css
│   │
│   └── background.ts         # Background extension logic
│
├── src/                      # Main application architecture
│
│   ├── components/           # Reusable UI components
│   │
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── NoteItem.tsx
│   │   ├── FloatingInput.tsx
│   │   ├── EmptyState.tsx
│   │   ├── Sidebar.tsx
│   │   └── NotebookHeader.tsx
│   │
│   ├── pages/                # UI screen structures
│   │
│   │   ├── Home.tsx
│   │   └── ProjectPage.tsx
│   │
│   ├── hooks/                # Custom React hooks
│   │
│   │   ├── useProjects.ts
│   │   ├── useNotes.ts
│   │   ├── useSearch.ts
│   │   └── useStorage.ts
│   │
│   ├── storage/              # Local-first data layer
│   │
│   │   ├── storage.ts
│   │   ├── schema.ts
│   │   ├── projects.ts
│   │   └── notes.ts
│   │
│   ├── styles/               # Shared global styles
│   │
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   ├── utils/                # Utility/helper functions
│   │
│   │   ├── export.ts
│   │   ├── helpers.ts
│   │   ├── constants.ts
│   │   ├── formatDate.ts
│   │   └── generateId.ts
│   │
│   ├── types/                # TypeScript types/interfaces
│   │
│   │   ├── project.ts
│   │   ├── note.ts
│   │   └── storage.ts
│   │
│   └── data/                 # Temporary mock/demo data
│       └── demoProjects.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── wxt.config.ts
├── README.md
└── .gitignore