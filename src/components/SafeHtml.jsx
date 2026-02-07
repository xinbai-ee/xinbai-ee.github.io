import DOMPurify from 'dompurify'

/**
 * Renders HTML content safely (sanitized with DOMPurify).
 * Use for bio, descriptions, and other text fields that may contain HTML.
 *
 * @param {string} html - HTML string (plain text is also valid)
 * @param {string} tagName - Wrapper element (default 'div')
 * @param {string} className - Optional class name
 */
const SafeHtml = ({ html, tagName = 'div', className }) => {
  if (html == null || html === '') return null
  const Tag = tagName
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'a', 'ul', 'ol', 'li', 'span', 'h2', 'h3'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
    ADD_ATTR: ['target'],
  })
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: sanitized }} />
}

export default SafeHtml
