import DocPageLayout from '../components/DocPageLayout'
import {
  getCaseStudy,
  getOtherCaseStudies,
} from '../data/caseStudiesContent'

function getCaseStudySlug() {
  const match = window.location.pathname.match(/^\/case-study\/([^/]+)\/?$/)
  return match?.[1] ?? null
}

function CaseStudyNotFound() {
  return (
    <div className="doc-page">
      <main className="doc-main" style={{ padding: '4rem var(--content-pad)' }}>
        <h1 className="doc-title">Case study not found</h1>
        <p className="doc-subtitle">
          This project case study may have moved. Browse case studies from the portfolio Projects section.
        </p>
        <a href="/#featured" className="btn-ghost" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
          View projects
        </a>
      </main>
    </div>
  )
}

export default function CaseStudy() {
  const slug = getCaseStudySlug()
  const study = slug ? getCaseStudy(slug) : null

  if (!study) return <CaseStudyNotFound />

  const moreCaseStudies = getOtherCaseStudies(slug)

  return (
    <DocPageLayout
      page={study.page}
      sections={study.sections}
      groups={study.groups}
      contactEmail={study.contactEmail}
      moreCaseStudies={moreCaseStudies}
      homeLabel="Back to portfolio"
    />
  )
}
