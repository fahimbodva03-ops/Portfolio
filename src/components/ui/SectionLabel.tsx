interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`section-label flex items-center gap-3 ${className}`}>
      <span className="w-8 h-px bg-cyan-400 opacity-60" />
      {children}
      <span className="w-8 h-px bg-cyan-400 opacity-60" />
    </span>
  );
}
