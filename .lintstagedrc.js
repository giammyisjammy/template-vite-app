/**
 * Makes lint-staged ignore files normally ignored by the linter
 * See: https://github.com/lint-staged/lint-staged?tab=readme-ov-file#how-can-i-ignore-files-from-eslintignore
 */
import { ESLint } from 'eslint'

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file)
    })
  )
  const filteredFiles = files.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

export default {
  '**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [
      'npm run lint:format',
      `eslint --report-unused-disable-directives --max-warnings=0 --fix ${filesToLint}`,
    ]
  },
}
