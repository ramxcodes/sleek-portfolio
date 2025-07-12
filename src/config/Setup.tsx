import { Download, FileText, Settings } from 'lucide-react';

export const steps = [
  {
    id: 1,
    title: 'Download necessary files',
    icon: <Download className="size-4" />,
    content: [
      {
        type: 'download',
        name: 'Fira-code.zip',
        description: "Unzip the font's file",
        href: '/setup/fira-code.zip',
      },
      {
        type: 'instruction',
        text: 'Select all the fonts, right click, and click to Install',
      },
      {
        type: 'download',
        name: 'vsc-extensions.txt',
        description: 'Place this file in downloads',
        href: '/setup/vsc-extensions.txt',
      },
      {
        type: 'instruction',
        text: 'Open the vscode in downloads directory',
      },
      {
        type: 'instruction',
        text: 'Install VSC Export & Import extension in vs code.',
      },
    ],
  },
  {
    id: 2,
    title: 'Installing all the extensions',
    icon: <FileText className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open Command Palette by pressing the keyboard shortcut',
      },
      {
        type: 'shortcut',
        text: 'Cmd + ⇧ + P (Mac) / Ctrl + ⇧ + P (Windows)',
      },
      {
        type: 'instruction',
        text: 'Enter the text in prompt and press Enter ⏎',
      },
      {
        type: 'prompt',
        text: 'VSC Export & Import',
      },
      {
        type: 'instruction',
        text: 'All extension will start to install',
      },
    ],
  },
  {
    id: 3,
    title: 'VS Code Settings',
    icon: <Settings className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open Command Palette by pressing the keyboard shortcut',
      },
      {
        type: 'shortcut',
        text: 'Cmd + ⇧ + P (Mac) / Ctrl + ⇧ + P (Windows)',
      },
      {
        type: 'instruction',
        text: 'Enter the text in prompt and press Enter ⏎',
      },
      {
        type: 'prompt',
        text: 'Preferences: Open Settings (JSON)',
      },
      {
        type: 'instruction',
        text: 'Copy the settings.json from the below window',
      },
    ],
  },
];

export const settingsJson = `{
    "CodeGPT.model": "gpt-4",
    "vscode-edge-devtools.webhint": false,
    "editor.linkedEditing": true,
    "editor.minimap.enabled": false,
    "cmake.configureOnOpen": true,
    "code-runner.runInTerminal": true,
    "code-runner.saveFileBeforeRun": true,
    "liveServer.settings.donotShowInfoMsg": true,
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
      "editor.defaultFormatter": "HookyQR.beautify"
    },
    "explorer.confirmDragAndDrop": false,
    "liveServer.settings.donotVerifyTags": true,
    "github.copilot.advanced": {},
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.cursorBlinking": "smooth",
    "files.autoSave": "afterDelay",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "explorer.confirmDelete": false,
    "editor.stickyScroll.enabled": false,
    "git.autofetch": true,
    "git.postCommitCommand": "push",
    "workbench.iconTheme": "material-icon-theme",
    
    // Silence the Noise
    "breadcrumbs.enabled": false,
    "editor.hover.enabled": true,
    "workbench.tips.enabled": false,
    "editor.colorDecorators": false,
    "workbench.startupEditor": "none",
    "editor.lightbulb.enabled": "off",
    "editor.overviewRulerBorder": false,
    "editor.renderLineHighlight": "none",
    "editor.occurrencesHighlight": "off",
    "problems.decorations.enabled": false,
    "editor.renderControlCharacters": false,
    "editor.hideCursorInOverviewRuler": true,
    "editor.gotoLocation.multipleReferences": "goto",
    "editor.gotoLocation.multipleDefinitions": "goto",
    "editor.gotoLocation.multipleDeclarations": "goto",
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "editor.gotoLocation.multipleImplementations": "goto",
    "editor.gotoLocation.multipleTypeDefinitions": "goto",
  
    "vscode_custom_css.imports": [
      "file:///E:/vscode/custom-vscode.css",
      "file:///E:/vscode/custom-vscode-script.js"
    ],
  
    "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.fontFamily": ""fira code", Consolas, 'Courier New', monospace",
    "workbench.statusBar.visible": false,
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "git-auto-pull.watchForChanges": true,
    "git-auto-pull.pullInterval": 2,
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.defaultFormatter": "HookyQR.beautify",
    "editor.formatOnSave": true,
    "eslint.run": "onSave",
    "cSpell.userWords": [
      "autofetch",
      "Consolas",
      "donot",
      "esbenp",
      "fileupload",
      "fira",
      "tabnine",
      "webhint"
    ],
    "workbench.settings.applyToAllProfiles": [
      "github.copilot.editor.enableAutoCompletions"
    ],
    "emmet.triggerExpansionOnTab": true,
    "emmet.useInlineCompletions": true,
    "tailwindCSS.emmetCompletions": true,
    "workbench.colorTheme": "Night Owl (No Italics)",
    "editor.wordWrap": "wordWrapColumn",
    "reactSnippets.settings.importReactOnTop": false,
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
  }`;
