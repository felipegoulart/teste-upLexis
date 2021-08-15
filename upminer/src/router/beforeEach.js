export default async (to, from, next) => {
  document.title = `UpMiner - ${to.meta.name}`
  next()
}