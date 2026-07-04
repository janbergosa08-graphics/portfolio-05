/**
 * Heroicons solid (24px) — MIT licensed, https://heroicons.com
 * Single icon set for doc pages, nav, contact, approach, and project cards.
 */
import {
  ArrowDownTrayIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  EyeIcon,
  FlagIcon,
  HeartIcon,
  LightBulbIcon,
  PhoneIcon,
  QueueListIcon,
  RocketLaunchIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

/** Doc / case study section icons (keys match content files). */
export const DOC_ICONS = {
  BookOpen: BookOpenIcon,
  FileText: DocumentTextIcon,
  Scale: ScaleIcon,
  Shield: ShieldCheckIcon,
  Sparkles: SparklesIcon,
  Target: FlagIcon,
  Workflow: QueueListIcon,
  Zap: BoltIcon,
  Brain: LightBulbIcon,
  Layout: Squares2X2Icon,
  MessageSquare: ChatBubbleLeftRightIcon,
  Rocket: RocketLaunchIcon,
}

/** Philosophy / approach cards (keys match constants.js). */
export const APPROACH_ICONS = {
  'user-focus': UserIcon,
  'grid-four': Squares2X2Icon,
  'chart-line-up': ArrowTrendingUpIcon,
  handshake: UserGroupIcon,
}

export function DocIcon({ name, className = 'doc-nav-icon' }) {
  const Icon = DOC_ICONS[name] ?? DocumentTextIcon
  return <Icon className={className} aria-hidden="true" />
}

export {
  ArrowDownTrayIcon,
  ArrowTrendingUpIcon,
  BookOpenIcon,
  BoltIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClockIcon,
  EnvelopeIcon,
  EyeIcon,
  HeartIcon,
  PhoneIcon,
  XMarkIcon,
}
