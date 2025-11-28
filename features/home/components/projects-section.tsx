"use client"

import React from "react"
import { Folder } from "lucide-react" 
import Image from "next/image"

// Tag and Circle Component
function TagAndCircle({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative flex items-center justify-center group cursor-pointer" onClick={onClick}>
      {/* Rotated Black Tag */}
      <div className="absolute transition-all duration-400 group-hover:-top-12 group-hover:-right-13 group-hover:rotate-30 -top-11 -right-11 transform rotate-25 z-30">
        <div className="relative">
          {/* Tag body */}
          <div className="bg-black text-white px-4 py-2 rounded-lg shadow-lg ">
            <span className="text-sm font-medium">See Recent Work</span>
          </div>
          {/* Tag pointer */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        </div>
      </div>

      {/* Light Gray Circle with Folder Icon */}
      <div className="relative w-36 h-36 bg-white/20 backdrop-blur-sm border rounded-full  flex items-center justify-center">
        <Folder className="w-12 h-12 text-gray-700 dark:text-gray-300" />
      </div>
    </div>
  )
}

interface ProjectsSectionProps {
  onScrollToProjects: () => void
}

export default function ProjectsSection({ onScrollToProjects }: ProjectsSectionProps) {
    // Project screenshots data
    const leftColumnItems = [
        { id: 1, imagePath: "/work/africkana/website.png" },
        { id: 2, imagePath: "/work/koraawards/website.png" },
        { id: 3, imagePath: "/work/pdforca/website.png" },
        { id: 4, imagePath: "/work/sofimedmaroc/website.png" },
    ]

    const rightColumnItems = [
        { id: 5, imagePath: "/work/softskillsclub/website.png" },
        { id: 6, imagePath: "/work/votemoi/website.png" },
        { id: 7, imagePath: "/work/africkana/website2.png" },
        { id: 8, imagePath: "/work/votemoi/website2.png" },
    ]

    // Combined items for mobile single column
    const allItems = [...leftColumnItems, ...rightColumnItems]

    return (
        <div className="relative max-h-[90svh] bg-card-2 overflow-hidden rounded-[var(--radius)] border border-border">
            <div className="absolute inset-0 bg-background/70 pointer-events-none z-10" />

            {/* Scrolling Columns Container */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-8 bg-background   py-2">
                {/* Left Column - Cards Scrolling Up */}
                <div className="flex-1 overflow-hidden">
                    <div className="flex flex-col gap-8 animate-scroll-up">
                        {/* Mobile: Show all items combined, Desktop: Show only left items */}
                        {[...allItems, ...allItems, ...allItems].map((item, index) => (
                            <div
                                key={`left-${item.id}-${index}`}
                                className="relative aspect-[16/9] rounded-[var(--radius)] overflow-hidden bg-card-2 border border-border shadow-2xl flex-shrink-0"
                            >
                                <Image
                                    src={item.imagePath}
                                    alt="Project screenshot"
                                    fill
                                    className="object-cover"
                                />
                                {/* Monitor stand effect */}
                                {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-card-2 rounded-b-lg" /> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Cards Scrolling Down - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block flex-1 overflow-hidden">
                    <div className="flex flex-col gap-8 animate-scroll-down">
                        {[...rightColumnItems, ...rightColumnItems, ...rightColumnItems].map((item, index) => (
                            <div
                                key={`right-${item.id}-${index}`}
                                className="relative aspect-[16/9]  rounded-[var(--radius)] overflow-hidden bg-card-2 border border-border shadow-2xl flex-shrink-0 "
                            >
                                <Image
                                    src={item.imagePath}
                                    alt="Project screenshot"
                                    fill
                                    className="object-cover"
                                />
                                {/* Monitor stand effect */}
                                {/* <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-card-2 rounded-b-lg" /> */}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

             {/* Center Tag and Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                 <TagAndCircle onClick={onScrollToProjects} />
             </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-card-2 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card-2 to-transparent pointer-events-none z-20" />
        </div>
    )
}
