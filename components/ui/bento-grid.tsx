/** BentoGrid — responsive bento layout (Apple-style asymmetric feature grid). */
import { cn } from '@/lib/utils'

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto', className)}>
      {children}
    </div>
  )
}

export function BentoCard({
  title,
  description,
  header,
  icon,
  className,
  span = 1,
}: {
  title: string
  description: React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  className?: string
  span?: 1 | 2 | 3
}) {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-card border border-border justify-between flex flex-col space-y-4',
        span === 2 && 'md:col-span-2',
        span === 3 && 'md:col-span-3',
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-heading font-bold text-foreground mb-2 mt-2">{title}</div>
        <div className="font-sans text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
