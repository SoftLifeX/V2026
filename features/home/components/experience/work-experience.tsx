import {
  BriefcaseBusinessIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react";
import Image from "next/image";
import React, { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import * as SiIcons from "react-icons/si";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/features/shared/ui/collapsible";
import { Separator } from "@/features/shared/ui/separator";
import { cn } from "@/lib/utils";

const iconMap = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon,
  education: GraduationCapIcon,
} as const;

// Utility function to generate company initials
function getCompanyInitials(companyName: string): string {
  const words = companyName.split(' ');
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return words.slice(0, 2).map(word => word.charAt(0).toUpperCase()).join('');
}

// Utility function to generate consistent gradient colors based on company name
function getCompanyGradient(companyName: string): string {
  const gradients = [
    'from-purple-500 to-purple-700',
    'from-blue-500 to-blue-700', 
    'from-orange-500 to-orange-700',
    'from-green-500 to-green-700',
    'from-pink-500 to-pink-700',
    'from-indigo-500 to-indigo-700',
  ];
  
  // Simple hash function to get consistent color
  let hash = 0;
  for (let i = 0; i < companyName.length; i++) {
    hash = companyName.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

/**
 * Represents the valid keys of the `iconMap` object, used to specify the type of icon
 * associated with an experience position.
 */
export type ExperiencePositionIconType = keyof typeof iconMap;

export type ExperiencePositionItemType = {
  /** Unique identifier for the position */
  id: string;
  /** The job title or position name */
  title: string;
  /** The period during which the position was held (e.g., "Jan 2020 - Dec 2021") */
  employmentPeriod: string;
  /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
  employmentType?: string;
  /** A brief description of the position or responsibilities */
  description?: string;
  /** An icon representing the position */
  icon?: ExperiencePositionIconType;
  /** A list of skills associated with the position */
  skills?: ({ name: string; icon: string } | string)[];
  /** Indicates if the position details are expanded in the UI */
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  /** Unique identifier for the experience item */
  id: string;
  /** Name of the company where the experience was gained */
  companyName: string;
  /** URL or path to the company's logo image */
  companyLogo?: string;
  /** List of positions held at the company */
  positions: ExperiencePositionItemType[];
  /** Indicates if this is the user's current employer */
  isCurrentEmployer?: boolean;
};

export const WorkExperience = forwardRef<HTMLDivElement, {
  className?: string;
  experiences: ExperienceItemType[];
}>(({ className, experiences }, ref) => {
  return (
    <div ref={ref} className={cn("bg-card-2 rounded-lg p-4 md:p-6 space-y-3 md:space-y-4", className)}>
      {experiences.map((experience, index) => (
        <ExperienceItem key={experience.id} experience={experience} isFirst={index === 0} />
      ))}
    </div>
  );
});

WorkExperience.displayName = "WorkExperience";

export function ExperienceItem({
  experience,
  isFirst = false,
}: {
  experience: ExperienceItemType;
  isFirst?: boolean;
}) {
  const latestPosition = experience.positions[0];
  const companyInitials = getCompanyInitials(experience.companyName);
  const gradientClass = getCompanyGradient(experience.companyName);

  return (
    <Collapsible defaultOpen={isFirst} asChild>
      <div className="bg-card-3 border border-border-2 rounded-lg p-3 md:p-4 cursor-pointer hover:shadow-md transition-all duration-500 hover:ring-6 hover:ring-border/50 dark:hover:ring-card hover:-ring-offset-3
      outline outline-border 
      data-[state=open]:ring-6 data-[state=open]:ring-border/50 dark:data-[state=open]:ring-card data-[state=open]:-ring-offset-3
      ">
        <CollapsibleTrigger className="group/experience w-full text-left cursor-pointer">
          {/* Mobile: Stacked layout, Desktop: Horizontal layout */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            {/* Circular Icon with Company Logo or Initials */}
            <div className="flex items-center gap-3 sm:flex-shrink-0">
              <div className={cn(
                "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg",
                " transition-transform duration-300  relative overflow-hidden bg-card-2 "
                )}>
                {experience.companyLogo ? (
                  <>
                    <Image
                      src={experience.companyLogo}
                      alt={experience.companyName}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain p-1.5 rounded-full"
                      unoptimized
                    />
                  
                  </>
                ) : (
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {companyInitials}
                  </span>
                )}
              </div>
              
              {/* Mobile: Company name next to icon */}
              <div className="sm:hidden flex-1">
                <h3 className="text-base font-semibold text-foreground">
                  {experience.companyName}
                </h3>
              </div>
            </div>

            {/* Desktop: Company and Position Info */}
            <div className="hidden sm:flex sm:flex-1 sm:min-w-0">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {experience.companyName}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">{latestPosition.title}</span>
                  {latestPosition.employmentType && (
                    <>
                      <span>•</span>
                      <span>{latestPosition.employmentType}</span>
                    </>
                  )}
                  <span>•</span>
                  <span>{latestPosition.employmentPeriod}</span>
                </div>
              </div>
            </div>

            {/* Mobile: Position info below icon */}
            <div className="sm:hidden flex-1">
              <div className="space-y-1">
                <div className="text-sm font-medium text-foreground">
                  {latestPosition.title}
                </div>
                <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                  {latestPosition.employmentType && (
                    <span>{latestPosition.employmentType}</span>
                  )}
                  <span>{latestPosition.employmentPeriod}</span>
                </div>
              </div>
            </div>

            {/* Chevron Icon */}
            <div className="flex-shrink-0 text-muted-foreground self-end sm:self-center">
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-data-[state=open]/experience:hidden transition-transform duration-300 group-hover/experience:translate-x-1" />
              <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 hidden group-data-[state=open]/experience:block transition-transform duration-300" />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border space-y-3 sm:space-y-4">
            {experience.positions.map((position) => (
              <ExperiencePositionItem key={position.id} position={position} />
            ))}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePositionItemType;
}) {
  const ExperienceIcon = iconMap[position.icon || "business"];

  return (
    <div className="space-y-3">
      {/* Position Header */}
      <div className="flex items-start sm:items-center gap-3">
        <div className="flex size-6 sm:size-8 shrink-0 items-center justify-center rounded-lg bg-background border border-border text-muted-foreground mt-0.5 sm:mt-0">
          <ExperienceIcon className="size-3 sm:size-4" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-sm sm:text-base font-medium text-foreground">
            {position.title}
          </h4>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
            {position.employmentType && (
              <span className="inline-block">{position.employmentType}</span>
            )}
            {position.employmentType && (
              <span className="hidden sm:inline">•</span>
            )}
            <span className="inline-block">{position.employmentPeriod}</span>
          </div>
        </div>
      </div>

      {/* Position Content */}
      {position.description && (
        <Prose className="ml-9 sm:ml-11">
          <ReactMarkdown>{position.description}</ReactMarkdown>
        </Prose>
      )}

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <ul className="flex flex-wrap gap-1 sm:gap-1.5 ml-9 sm:ml-11">
          {position.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Skill skill={skill} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
        "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-xs sm:prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-p:text-xs sm:prose-p:text-sm prose-p:leading-relaxed",
        "prose-ul:text-xs sm:prose-ul:text-sm prose-ul:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

function Skill({ skill, className, ...props }: { skill: { name: string; icon: string } | string } & React.ComponentProps<"span">) {
  // Handle both old string format and new object format
  const skillName = typeof skill === 'string' ? skill : skill.name;
  const skillIcon = typeof skill === 'string' ? null : skill.icon;
  
  const IconComponent = skillIcon ? SiIcons[skillIcon as keyof typeof SiIcons] : null;
  
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius)] border border-border bg-background px-2 sm:px-3 py-1 font-mono text-xs text-muted-foreground",
        "transition-colors duration-200 hover:bg-muted/70",
        className
      )}
      {...props}
    >
      {IconComponent && <IconComponent className="w-3 h-3" />}
      <span>{skillName}</span>
    </span>
  );
}
