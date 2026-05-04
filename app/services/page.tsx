'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Users,
  Radar,
  PenTool,
  BarChart3,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Video,
  MessageSquare,
  Mail,
  Mic,
  Send,
  Star,
  ChevronDown,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll'
import { BlurFade } from '@/components/ui/blur-fade'