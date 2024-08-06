export default ({ lts }: Lume.Data, { url }: Lume.Helpers) => (
  <header class="p-author h-card w-full h-12 flex place-items-center gap-4 motion-safe:view-transition-header">
    <data class="u-photo hidden" value={lts.author.avatar} />
    <img class="h-8 w-8 rounded-full" src={lts.author.avatar} alt={lts.author.name} />
    <a rel="author" class="p-name u-url u-uid no-underline" href={url('/')}>{lts.author.name}</a>
    {lts.author.links && (
      <div class="flex gap-4">
        {lts.author.links.map(({ icon, href, text }) => (
          <a href={href}>{text}</a>
        ))}
      </div>
    )}
    <div class="flex-1"></div>
    <a href={url('/search')}><div class="i-material-symbols:search w-6 h-6" /></a>
  </header>
)
