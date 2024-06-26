export default ({ lts }: Lume.Data, { url }: Lume.Helpers) => (
  <div class="p-author h-card flex flex-col my-4 gap-4 children:m-0">
    <data class="u-photo hidden" value={lts.author.avatar} />
    <data class="p-name hidden" value={lts.author.name} />
    <data class="u-uid u-url hidden" value={url('/')} />
    <img class="h-16 w-16 rounded-full" src={lts.author.avatar} alt={lts.author.name} />
    <h1>{lts.site.description}</h1>
    {lts.author.bio && (<p class="p-note color-on-surface-variant opacity-72">{lts.author.bio}</p>)}
    {lts.author.links && (
      <div class="flex gap-4">
        {lts.author.links.map(({ icon, href }) => (
          <a href={href}><div class={`${icon ?? 'i-material-symbols:link'} w-6 h-6 transition color-on-surface-variant opacity-72 hover:opacity-100`} /></a>
        ))}
      </div>
    )}
  </div>
)
