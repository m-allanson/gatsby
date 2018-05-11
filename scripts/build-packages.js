const {
  lstatSync,
  readdirSync,
} = require(`fs`)
const path = require(`path`)
const fs = require(`fs`)
const {
  execSync,
} = require(`child_process`)

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => path.join(source, name)).filter(isDirectory)

const packages = getDirectories(path.join(path.resolve(__dirname), `..`, `packages`))

const watch
const env

packages.forEach(pkg => {
  const srcDir = path.join(pkg, `src`)
  const outDir = path.join(pkg, `dist`)
  const ignore = `**/__tests__`

  if (!fs.existsSync(srcDir)) return
  console.log(`srcDir:`, srcDir)
  execSync(`./node_modules/.bin/babel ${srcDir} --out-dir ${outDir} --ignore ${ignore}`, { stdio:[0,1,2] })
})
