import DocPageLayout from '../components/DocPageLayout'
import { legalContent } from '../data/legalContent'

export default function Legal() {
  return (
    <DocPageLayout
      page={legalContent.page}
      sections={legalContent.sections}
      contactEmail={legalContent.contactEmail}
    />
  )
}
