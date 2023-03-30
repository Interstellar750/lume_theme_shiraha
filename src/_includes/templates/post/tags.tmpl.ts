import type { PageData, PageHelpers } from '../../types.ts'
import { html } from '../../utils/html.ts'

export default ({ tags }: PageData, { url }: PageHelpers) =>
  tags?.map((tag) =>
    html`<span>#<a
      href="${url(`/t/${tag}`)}"
      class="p-category">${tag}</a>
    </span>`
  ).join('')
