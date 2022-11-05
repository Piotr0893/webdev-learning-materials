export const confingTemplateMessage = `
"vscodeGitCommit.template": [
    "{type}: {action}{what_was_done}\n\n{why_it_was_done}{breaking}"
  ]
`

export const configForGitMessageExtenstion = `
  "vscodeGitCommit.variables": {
    "prefix": "keke",
    "action": [
      {
        "label": "",
        "detail": "❌ no action to describe"
      },
      {
        "label": "add ",
        "detail": "🆕 a new feature is introduced with the changes"
      },
      {
        "label": "remove ",
        "detail": "🗑️ removing code or files"
      },
      {
        "label": "update ",
        "detail": "🔧 an existing feature is updated with the changes"
      },
      {
        "label": "move ",
        "detail": "🚚 moving files, folders or code"
      },
      {
        "label": "fix ",
        "detail": "🐛 something was not correct and now it is"
      },
      {
        "label": "change ",
        "detail": "🔧 changing code or files without adding or removing"
      },
      {
        "label": "improve ",
        "detail": "🏁 performance improvements"
      },
      {
        "label": "setup ",
        "detail": "🔧 setting up the project or dependencies"
      },
      {
        "label": "update dependencies ",
        "detail": "🔧 updating dependencies"
      }
    ],
    "breaking": [
      {
        "label": "",
        "detail": "❌ no breaking change to describe"
      },
      {
        "label": "\n\nBREAKING CHANGE",
        "detail": "💥 a breaking change: a feature that was previously available will now behave differently"
      }
    ],
    "type": [
      {
        "label": "Feat",
        "detail": "🆕 a new feature is introduced with the changes"
      },
      {
        "label": "Fix",
        "detail": "🔴 a bug fix has occurred"
      },
      {
        "label": "Refactor",
        "detail": "🔧 not bugfix, not feature, but code changes, works the same"
      },
      {
        "label": "Chore",
        "detail": "🧹 update dependency / changes to build tools or scripts / code doesn't change"
      },
      {
        "label": "Perf",
        "detail": "🏁 performance improvements"
      },
      {
        "label": "Docs",
        "detail": "🗄️ updates to documentation such as a the README or other markdown files"
      },
      {
        "label": "Style",
        "detail": "✨ changes to code formatting, like spaces or semicolons"
      },
      {
        "label": "Test",
        "detail": "🤖 including new or correcting previous tests"
      },
      {
        "label": "Build",
        "detail": "👷 changes that affect the build system or external dependencies "
      },
      {
        "label": "CI",
        "detail": "👾 continuous integration related"
      },
      {
        "label": "Revert",
        "detail": "🤕 reverts a previous commit"
      },
      {
        "label": "WIP",
        "detail": "🚧 work in progress"
      }
    ]
  }`
