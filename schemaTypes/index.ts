// Document types
import profile from './profile'
import workExperience from './workExperience'
import education from './education'
import skill from './skill'
import caseStudy from './caseStudy'
import blogPost from './blogPost'
import tag from './tag'
import contactSubmission from './contactSubmission'
import siteSettings from './siteSettings' // Import the new singleton schema
import aboutPage from './aboutPage' // Import the About Page schema

// Object types
import blockContent from './blockContent'
import caseStudySection from './caseStudySection'
import caseStudyMetric from './caseStudyMetric'

export const schemaTypes = [
  // Document types
  profile,
  workExperience,
  education,
  skill,
  caseStudy,
  blogPost,
  tag,
  contactSubmission,
  siteSettings, // Add the singleton to the exported array
  aboutPage, // Add the About Page schema

  // Object types
  blockContent,
  caseStudySection,
  caseStudyMetric,
]
