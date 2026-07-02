import DocPageLayout from '../components/DocPageLayout'
import { documentationContent } from '../data/documentationContent'

export default function Documentation() {
  return (
    <DocPageLayout
      page={documentationContent.page}
      sections={documentationContent.sections}
      groups={documentationContent.groups}
    />
  )
}
